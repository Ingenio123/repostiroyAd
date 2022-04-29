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
} from "@chakra-ui/react";
import { IReviewVM } from "../../../vm/ReviewsList";
import { ModalReviews } from "../organismos/ModalReviews";
import { useState, useCallback } from "react";

interface Props {
  listData: Array<IReviewVM>;
}

const TableReviews = ({ listData }: Props) => {
  const [OpenModal, setModal] = useState<boolean>(false);
  const [Id, setId] = useState<string | undefined>("");
  const toast = useToast();

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);
  const openModal = useCallback((id: string | undefined) => {
    setModal(true);
    setId(id);
  }, []);

  const handleDelete = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    closeModal();
  };

  return (
    <>
      <TableContainer m="0">
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
                  <Text isTruncated maxW="8rem">
                    {items.description}
                  </Text>
                </Td>
                {/* <Td>{items.country_iso}</Td> */}
                <Td>
                  <Button
                    colorScheme={"red"}
                    size="sm"
                    mr="1"
                    onClick={() => openModal(items._id)}
                  >
                    Delete
                  </Button>
                  <Button colorScheme={"blue"} size="sm">
                    View
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <ModalReviews
        title="modal title"
        onClose={closeModal}
        openModal={OpenModal}
        handleDelete={handleDelete}
      />
    </>
  );
};
export default TableReviews;
