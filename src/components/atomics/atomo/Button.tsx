import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  text?: string;
  colorScheme: string;
}

const ButtonAtom: FC<IProps> = ({ text, colorScheme, children }) => {
  return <Button colorScheme={colorScheme}>{text || children}</Button>;
};

export default ButtonAtom;
