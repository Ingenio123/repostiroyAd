import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Text,
  useToast,
  Box,
  Icon,
} from "@chakra-ui/react";
import { IReviewVM } from "../../../vm/ReviewsList";
import { ModalReviews } from "../organismos/ModalReviews";
import { useState, useCallback } from "react";
import { useReviewListState } from "../../../hooks/ReviewRecoil";
import di from "../../../di";
import FormLegend from "../atomo/FormLegend";
import { IoReload } from "react-icons/io5";

interface Props {
  listData: Array<IReviewVM>;
}

const TableReviews = ({ listData }: Props) => {
  const [OpenModal, setModal] = useState<boolean>(false);
  const [Id, setId] = useState<string>("");
  const toast = useToast();
  const [listReviews, setListReviews] = useReviewListState();

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);
  const openModal = useCallback((id: string): void => {
    setModal(true);
    setId(id);
  }, []);

  const handleDelete = async () => {
    let datos = await di.reviews.deleteReview(Id);
    if (!datos) {
      return closeModal();
    }
    const reviews = listReviews.filter((datos) => datos._id !== Id);
    setListReviews(reviews);
    toast({
      title: "Successful.",
      description: "This review has been deleted",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    closeModal();
  };
  const handleRefresh = async () => {
    let datos = await di.reviews.getReviews();
    setListReviews(datos);
  };

  return (
    <>
      <TableContainer width={"100%"}>
        <FormLegend>View o Delete Reviews</FormLegend>
        <Box
          as="div"
          borderRadius={"50%"}
          backgroundColor="gray.100"
          width={"36px"}
          height="36px"
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          marginLeft={"auto"}
          marginRight="3rem"
          marginBottom="1rem"
          _hover={{ cursor: "pointer", backgroundColor: "gray.300" }}
          onClick={handleRefresh}
        >
          <Icon as={IoReload} boxSize={5} />
        </Box>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th isNumeric>id</Th>
              <Th>Name</Th>
              <Th>language</Th>
              <Th>Reviews</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {listData.map((items, index) => (
              <Tr key={items._id}>
                <Td>{index}</Td>
                <Td>{items.name_user}</Td>
                <Td>{items.languages_is_learning}</Td>
                <Td>
                  <Text isTruncated maxW="25rem">
                    {items.description}
                  </Text>
                </Td>

                <Td>
                  <Button
                    colorScheme={"red"}
                    size="sm"
                    mr="1"
                    onClick={() => openModal(items._id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <ModalReviews
        title="Delete?"
        onClose={closeModal}
        openModal={OpenModal}
        handleDelete={handleDelete}
      />
    </>
  );
};
export default TableReviews;
