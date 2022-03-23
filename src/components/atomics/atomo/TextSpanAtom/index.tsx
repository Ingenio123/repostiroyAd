import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

// interface DefaultTextProps extends TextProps {
//   size: "s" | "l" | "m" | "l" | "xl";
// }

const TextSpanAtom: FC<TextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default TextSpanAtom;
