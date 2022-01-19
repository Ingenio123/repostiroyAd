import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { BoxAtom } from "../atomo/Card";
import { FlexAtom } from "../atomo/Flex";
import { StackAtom } from "../atomo/Stack";
import { useState } from "react";

export const CardTeacherOrganismo = ({ data }: any) => {
  const [State, setState] = useState<any>("");
  const Dropdown = (index: any) => {
    if (index === State) return setState(null);
    return setState(index);
  };

  return (
    <StackAtom sapacign="24px">
      <Box w="70%">
        {data.map((item: any, index: number) => {
          return (
            <FlexAtom key={index} mt="20px">
              <BoxAtom>
                <Avatar src={item._imgUrl} />
                <div style={{ marginLeft: "10px" }}>
                  <Text fontWeight="bold">{item._name} </Text>
                  <Text fontSize="medium">{item._eslogan}</Text>
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
                    {item._description}
                  </Text>
                  <Text fontWeight={"medium"}>Profesional Background</Text>
                  <Text fontWeight={"normal"} mb="2">
                    {item._profBackground}
                  </Text>
                  <Text fontWeight={"medium"}>Interests</Text>
                  <Text fontWeight={"normal"} mb="2">
                    {item._interests}
                  </Text>
                  <Flex width="100%">
                    <Button
                      alignSelf={"flex-end"}
                      justifySelf={"flex-end"}
                      size={"sm"}
                      bg="green.500"
                      colorScheme="green"
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
      <Box w="30%" h="40px" bg="pink.100">
        3
      </Box>
    </StackAtom>
  );
};
