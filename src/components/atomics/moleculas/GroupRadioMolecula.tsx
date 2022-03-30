import { RadioGroup, RadioGroupProps } from "@chakra-ui/react";
type Props = {
  children: JSX.Element;
};
export const GroupRadioMolecula = (
  { ...props }: RadioGroupProps,
  { children }: Props
) => {
  return <RadioGroup {...props}>{children}</RadioGroup>;
};
