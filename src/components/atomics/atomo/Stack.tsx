import { Stack, Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

export const StackAtom: FC<BoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};
