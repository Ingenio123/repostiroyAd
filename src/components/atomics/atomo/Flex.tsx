import { Flex } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  mt?: string;
}

export const FlexAtom: FC<IProps> = ({ children, mt }) => (
  <Flex
    p="2"
    mt={mt}
    border="1px"
    borderColor="gray.200"
    borderRadius="md"
    justifyContent={"space-between"}
  >
    {children}
  </Flex>
);
