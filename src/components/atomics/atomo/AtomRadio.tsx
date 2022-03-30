import { FC } from "react";
import { Radio, RadioProps, Text } from "@chakra-ui/react";

interface IProps extends RadioProps {
  text: string;
  value: string;
  fontSizeText: "lg" | "md";
}

export const RadioAtom = ({ text, value, fontSizeText, ...props }: IProps) => {
  return (
    <Radio {...props} value={value}>
      <Text as="span" fontSize={fontSizeText}>
        {text}
      </Text>
    </Radio>
  );
};
