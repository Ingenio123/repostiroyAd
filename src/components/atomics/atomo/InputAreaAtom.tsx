import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

interface IProps {
  htmlFor: string | "text";
  label: string;
  placeholder: string;
}

export const InputTextAreaAtom = ({ htmlFor, label, placeholder }: IProps) => {
  return (
    <FormControl width="100%">
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      <Textarea placeholder={placeholder} />
    </FormControl>
  );
};
