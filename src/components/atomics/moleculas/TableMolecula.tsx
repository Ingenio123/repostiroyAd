import {
  Table,
  Tbody,
  Tr,
  Td,
  Button,
  Thead,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FC } from "react";
import { ICuponCodeVM } from "../../../vm/CuponCodeList";
import { useState } from "react";

interface TableMoleculaProps {
  codeList: Array<ICuponCodeVM>;
  deleteCoupon(id: string): void;
}
export const TableMolecula: FC<TableMoleculaProps> = ({
  codeList,
  deleteCoupon,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const FormatDate = (dateExpires: Date) => {
    // console.log(d);
    // console.log(d.getFullYear());
    const d = new Date(dateExpires);
    // console.log(d);
    const year = d.getFullYear(); // 2019
    const date = d.getDate();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayIndex = d.getDay();
    const dayName = days[d.getDay()]; // Thu
    const monthIndex = d.getMonth();
    const monthName = months[monthIndex];

    const formatted = `${dayName}, ${date} ${monthName} ${year}`;
    return formatted;
  };

  const [idString, setId] = useState<string>("");

  const handleDelete = (id: string) => {
    onOpen();
    setId(id);
  };

  const Confirm = () => {
    deleteCoupon(idString);
    onClose();
  };

  return (
    <>
      <Box overflowY="auto" maxHeight="370px">
        <Table width="100%" size="sm" mt="2rem">
          <Thead>
            <Tr>
              <Td fontWeight="medium">Coupon Name</Td>
              <Td fontWeight="medium">Discount</Td>
              <Td fontWeight="medium">N° uses</Td>
              <Td fontWeight="medium">Status</Td>
              <Td fontWeight="medium">Expiration date</Td>
            </Tr>
          </Thead>
          <Tbody>
            {codeList.map((e) => {
              return (
                <Tr key={e.id}>
                  <Td textAlign={"center"}>{e.code}</Td>
                  <Td textAlign={"center"}>{e.valor}</Td>
                  <Td textAlign={"center"}>{e.numberUses}</Td>
                  <Td textAlign={"center"}>
                    {e.caducado ? "Expired" : "Active"}
                  </Td>
                  <Td textAlign={"center"}>{FormatDate(e.expiresCode)}</Td>
                  <Td display="flex">
                    <Button
                      type="button"
                      colorScheme={"red"}
                      size="sm"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this coupon? this action cannot be
            undone.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={Confirm}>
              Confirm
            </Button>
            <Button variant="solid" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
