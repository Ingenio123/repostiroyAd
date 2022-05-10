import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Tag,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Img,
  Text,
  Select,
} from "@chakra-ui/react";
import { HiX } from "react-icons/hi";
import FormLegend from "../atomo/FormLegend";
import { useEffect, useCallback, useState, ChangeEvent } from "react";
import di from "../../../di";
import { usePromoListState } from "../../../hooks/PromoRecoil";
import PromoVm from "../../../vm/PromoList";
type DatosActive = {
  _id: string;
  promo_title: string;
  promo_cupon: string;
  promo_url_picture: string;
  promo_description: string;
  promo_conditions: string;
};

export const TablePromo = () => {
  const [Open, setOpen] = useState(false);
  const [OpenDelete, setOpenDelete] = useState(false);
  const [DatosActions, setDatosActions] = useState<DatosActive>({
    _id: "",
    promo_title: "",
    promo_cupon: "",
    promo_description: "",
    promo_url_picture: "",
    promo_conditions: "",
  });
  const [Template, setTemplate] = useState<number | string>(0);
  const [listPromo, setListPromo] = usePromoListState();
  //
  const promoVM = listPromo.map((promoEntity) => new PromoVm(promoEntity));
  //
  // const { isOpen, onClose, onOpen } = useDisclosure();
  //
  useEffect(() => {
    // di.promo.getPromos();
    const fetchData = async () => {
      try {
        let res = await di.promo.getPromos();
        console.log(res);
        setListPromo(res);
        return res;
      } catch (err) {
        throw err;
      }
    };
    fetchData();
    return () => {};
  }, []);
  //
  const handleModal = useCallback(() => {
    setOpen((p) => !p);
  }, []);

  const handleModalDelete = useCallback(() => {
    setOpenDelete((prev) => !prev);
  }, []);

  const handleActive = () => {
    handleModal();
  };

  const handleChangueSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "") setTemplate(e.target.value);
  };

  return (
    <>
      <TableContainer whiteSpace={"nowrap"}>
        <FormLegend>View or Delete Promo</FormLegend>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Promo title</Th>
              <Th>Promo description</Th>
              <Th>Promo code</Th>
              <Th>Status</Th>
              <Th>Accion</Th>
            </Tr>
          </Thead>
          <Tbody>
            {promoVM.map((item) => (
              <Tr key={item._id}>
                <Td>{item.promo_titile}</Td>
                <Td>
                  <Text isTruncated maxW="10rem">
                    {item.promo_description}
                  </Text>
                </Td>
                <Td>{item.promo_code}</Td>
                <Td>
                  {false ? (
                    <Tag size="sm" colorScheme="green">
                      Active
                    </Tag>
                  ) : (
                    <Tag size="sm" colorScheme="yellow">
                      Inactive
                    </Tag>
                  )}{" "}
                </Td>
                <Td>
                  <Button
                    onClick={() => {
                      setDatosActions({
                        ...DatosActions,
                        _id: item._id,
                        promo_title: item.promo_titile,
                        promo_conditions: item.promo_conditions,
                        promo_cupon: item.promo_code,
                        promo_description: item.promo_description,
                        promo_url_picture: item.promo_url_picture,
                      });
                      handleActive();
                    }}
                    size="sm"
                    colorScheme={"green"}
                    mr=".2rem"
                  >
                    Active
                  </Button>
                  <Button
                    size="sm"
                    colorScheme={"red"}
                    onClick={handleModalDelete}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal
        isOpen={Open}
        onClose={handleModal}
        scrollBehavior="inside"
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent backgroundColor="trueGray.500">
          <ModalHeader>Active Promo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Template === "1" && (
              <Box
                w="787px"
                h="442px"
                margin="0 auto"
                justifyContent={"center"}
                display="flex"
                alignItems="center"
                boxShadow={"md"}
                mb="3rem"
                borderRadius={"md"}
                overflow={"hidden"}
                position="relative"
                backgroundColor="white"
                columnGap={"20px"}
              >
                <Box w="420px" h="100%">
                  <Img
                    src={DatosActions.promo_url_picture}
                    objectFit="cover"
                    height="100%"
                  />
                </Box>

                <Box
                  display={"flex"}
                  flexDirection="column"
                  justifyContent={"center"}
                  alignItems="center"
                  h="100%"
                  w="360px"
                  pr="20px"
                >
                  <Text
                    as="h3"
                    fontFamily={"Helvetica"}
                    fontWeight={"semibold"}
                    fontSize="4xl"
                    lineHeight={"normal"}
                    mb="1rem"
                  >
                    {DatosActions.promo_title}
                  </Text>
                  <Text
                    fontSize="2xl"
                    fontWeight={"light"}
                    fontFamily={"Helvetica"}
                    mb="1rem"
                    textAlign={"center"}
                    lineHeight="normal"
                  >
                    {DatosActions.promo_description}
                  </Text>
                  <Text
                    fontWeight={"bold"}
                    fontSize="3xl"
                    fontFamily={"Helvetica"}
                    lineHeight="normal"
                    mb="1rem"
                  >
                    {DatosActions.promo_cupon}
                  </Text>

                  <Button colorScheme="brand" minWidth={"200px"} mb="3rem">
                    Buy Now
                  </Button>
                  <Text
                    fontSize="sm"
                    fontFamily={"Helvetica"}
                    textAlign="center"
                  >
                    "{DatosActions.promo_conditions}"
                  </Text>
                </Box>
              </Box>
            )}
            {Template === "2" && (
              <Box
                w="787px"
                h="442px"
                margin="0 auto"
                justifyContent={"center"}
                display="flex"
                alignItems="center"
                boxShadow={"md"}
                mb="3rem"
                borderRadius={"md"}
                overflow={"hidden"}
                position="relative"
                backgroundColor="white"
                columnGap={"20px"}
              >
                <Box
                  display={"flex"}
                  flexDirection="column"
                  justifyContent={"center"}
                  alignItems="center"
                  h="100%"
                  w="360px"
                  pl="20px"
                >
                  <Text
                    as="h3"
                    fontFamily={"Helvetica"}
                    fontWeight={"semibold"}
                    fontSize="4xl"
                    lineHeight={"normal"}
                    mb="1rem"
                  >
                    {DatosActions.promo_title}
                  </Text>
                  <Text
                    fontSize="2xl"
                    fontWeight={"light"}
                    fontFamily={"Helvetica"}
                    mb="1rem"
                    textAlign={"center"}
                    lineHeight="normal"
                  >
                    {DatosActions.promo_description}
                  </Text>
                  <Text
                    fontWeight={"bold"}
                    fontSize="3xl"
                    fontFamily={"Helvetica"}
                    lineHeight="normal"
                    mb="1rem"
                  >
                    {DatosActions.promo_cupon}
                  </Text>

                  <Button colorScheme="brand" minWidth={"200px"} mb="3rem">
                    Buy Now
                  </Button>
                  <Text
                    fontSize="sm"
                    fontFamily={"Helvetica"}
                    textAlign="center"
                  >
                    "{DatosActions.promo_conditions}"
                  </Text>
                </Box>
                <Box w="420px" h="100%">
                  <Img
                    src={DatosActions.promo_url_picture}
                    objectFit="cover"
                    height="100%"
                  />
                </Box>
              </Box>
            )}
            <Select placeholder="Select option" onChange={handleChangueSelect}>
              <option value="1">Template 1</option>
              <option value="2">Template 2</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Submit
            </Button>
            <Button variant="ghost" onClick={handleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={OpenDelete} onClose={handleModalDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this promo? this action cannot be
            undone.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Accept
            </Button>
            <Button variant="ghost" onClick={handleModalDelete}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
