import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  htmlFor: string | "text";
  label: string;
  type: "text" | "email" | "password";
  register?: any;
}

export const InputAtom = ({
  htmlFor,
  label,
  type,
  register,
  ...props
}: IProps) => {
  return (
    <FormControl {...props}>
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <Input id={htmlFor} type={type} name="name" />
    </FormControl>
  );
};
