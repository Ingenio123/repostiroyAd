import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IProps {
  text?: string;
  colorScheme?: string;
  type?: "submit" | "button" | "reset";
  width?: string;
  children?: ReactNode;
}

const ButtonAtom = ({ type, width, text, colorScheme, children }: IProps) => {
  return (
    <Button
      type={type}
      colorScheme={colorScheme}
      width={width || "1"}
      m="2rem auto"
      display="block"
    >
      {text || children}
    </Button>
  );
};

export default ButtonAtom;
