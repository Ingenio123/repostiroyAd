import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BoxAtom } from "../atomo/Card";
import { FlexAtom } from "../atomo/Flex";
import { StackAtom } from "../atomo/Stack";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { ModalMolecula } from "../../../components/atomics/moleculas/ModalMolecula";

export const CardTeacherOrganismo = ({ data, ...props }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [State, setState] = useState<any>("");
  const [id, setId] = useState<any>("");
  const history = useHistory();

  const Dropdown = (index: any) => {
    if (index === State) return setState(null);
    return setState(index);
  };

  const handleClick = (id: string) => {
    history.push(`/admin/update/teacher/${id}`);
  };

  const handleClickModal = (id: string) => {
    setId(id);
    return onOpen();
  };

  return (
    <StackAtom sapacign="24px">
      <Box w="70%">
        {data.map((item: any, index: number) => {
          return (
            <FlexAtom key={index} mt="20px">
              <BoxAtom>
                <Avatar src={item.imgUrl} />
                <div style={{ marginLeft: "10px" }}>
                  <Text fontWeight="bold">{item.name} </Text>
                  <Text fontSize="medium">{item.eslogan}</Text>
                </div>
              </BoxAtom>

              <Button
                alignSelf={"flex-end"}
                justifySelf={"flex-end"}
                size={"sm"}
                bg="brand.900"
                colorScheme="brand"
                onClick={() => Dropdown(index)}
              >
                view more
              </Button>
              {State === index && (
                <Box borderTop="1px" borderColor="gray.200" p="2" mt="3">
                  <Text fontWeight={"medium"}>Description</Text>
                  <Text fontWeight={"normal"} mb="2">
                    {item.description}
                  </Text>
                  <Text fontWeight={"medium"}>Profesional Background</Text>
                  <Text fontWeight={"normal"} mb="2">
                    {item.profBackground}
                  </Text>
                  <Text fontWeight={"medium"}>Interests</Text>
                  <Text fontWeight={"normal"} mb="2">
                    {item.interests}
                  </Text>
                  <Flex width="100%">
                    <Button
                      alignSelf={"flex-end"}
                      justifySelf={"flex-end"}
                      size={"sm"}
                      bg="green.500"
                      colorScheme="green"
                      onClick={() => handleClick(item.id)}
                    >
                      Update
                    </Button>
                    <Button
                      alignSelf={"flex-end"}
                      justifySelf={"flex-end"}
                      size={"sm"}
                      bg="red.500"
                      colorScheme="red"
                      ml="20px"
                      onClick={() => handleClickModal(item.id)}
                    >
                      Delete
                    </Button>
                  </Flex>
                </Box>
              )}
            </FlexAtom>
          );
        })}
      </Box>
      <ModalMolecula
        handleDelete={props.handleDelete}
        isOpen={isOpen}
        id={id}
        onClose={onClose}
      />
      <Box w="30%" h="40px" bg="pink.100">
        3
      </Box>
    </StackAtom>
  );
};
