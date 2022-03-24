import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";

export const BoxAtom: FC<BoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};
