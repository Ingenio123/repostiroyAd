import { Stack, Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

export const StackAtom: FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box as="div" mt="30px" {...props}>
      {children}
    </Box>
  );
};
