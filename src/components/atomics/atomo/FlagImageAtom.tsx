import { Image, ImageProps } from "@chakra-ui/react";
import { FC } from "react";
export const FlagImageAtom: FC<ImageProps> = ({ ...props }) => {
  return <Image {...props} />;
};
