import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  width?: string;
  padding?: string;
}

export const BoxAtom = ({ width, children, padding, ...props }: IProps) => {
  return (
    <Box
      flexDirection={"row"}
      display={"flex"}
      width={width || "80%"}
      padding={padding || "1rem"}
      {...props}
    >
      {children}
    </Box>
  );
};
