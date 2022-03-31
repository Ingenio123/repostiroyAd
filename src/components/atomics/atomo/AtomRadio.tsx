import { FC } from "react";
import { CheckboxProps, Checkbox } from "@chakra-ui/react";

interface IProps extends CheckboxProps {
  value: string;
}

export const RadioAtom: FC<IProps> = ({
  value,
  children,
  ...props
}: IProps) => {
  return (
    <Checkbox {...props} value={value} _hover={{ cursor: "pointer" }}>
      {children}
    </Checkbox>
  );
};
