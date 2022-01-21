import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  text?: string;
  colorScheme: string;
  type: "submit" | "button" | "reset";
  width?: string;
}

const ButtonAtom: FC<IProps> = ({
  type,
  width,
  text,
  colorScheme,
  children,
}) => {
  return (
    <Button type={type} colorScheme={colorScheme} width={width || "1"}>
      {text || children}
    </Button>
  );
};

export default ButtonAtom;
