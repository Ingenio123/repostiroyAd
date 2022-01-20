import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

interface IProps {
  htmlFor: string | "text";
  label: string;
  placeholder: string;
}

export const InputTextAreaAtom = ({ htmlFor, label, placeholder }: IProps) => {
  return (
    <FormControl widt="100%">
      <FormLabel htmlForm={htmlFor}>{label}</FormLabel>
      <Textarea placeholder={placeholder} />
    </FormControl>
  );
};
