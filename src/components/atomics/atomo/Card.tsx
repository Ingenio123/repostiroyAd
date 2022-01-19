import { Box } from "@chakra-ui/react";
import { FC } from "react";

export const BoxAtom: FC = ({ children }) => {
  return (
    <Box flexDirection={"row"} display={"flex"} width={"50%"}>
      {children}
    </Box>
  );
};
