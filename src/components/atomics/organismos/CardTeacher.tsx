import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { BoxAtom } from "../atomo/Card";
import { FlexAtom } from "../atomo/Flex";
import { StackAtom } from "../atomo/Stack";

export const CardTeacherOrganismo = ({ data }: any) => {
  console.log(data);
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
                  <Text fontSize="sm">{item._eslogan}</Text>
                </div>
              </BoxAtom>
              <Button
                alignSelf={"flex-end"}
                justifySelf={"flex-end"}
                size={"sm"}
                bg="gray.300"
              >
                view more
              </Button>
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
