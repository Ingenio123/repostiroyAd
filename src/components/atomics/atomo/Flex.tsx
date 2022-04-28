import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IProps {
  mt?: string;
  children: ReactNode;
}

export const FlexAtom: FC<IProps> = ({ children, mt }) => (
  <Flex
    p="2"
    mt={mt}
    border="1px"
    borderColor="gray.200"
    borderRadius="md"
    justifyContent={"space-between"}
    flexDirection={"column"}
  >
    {children}
  </Flex>
);
