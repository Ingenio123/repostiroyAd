import { Box, Text } from "@chakra-ui/react";
import { FlagImageAtom } from "../atomo/FlagImageAtom";
import { RadioAtom } from "../atomo/AtomRadio";
import { FC } from "react";
interface IProps {
  url_image: string;
  name_flag: string;
  id: string;
  fontSizeText: "md" | "base" | "lg";
  key: string;
  childreen?: FC;
}

export const FlagMolecula = ({
  url_image,
  id,
  name_flag,
  fontSizeText,
  key,
}: IProps) => {
  return (
    <Box key={key} mb="1">
      <RadioAtom value={id} _hover={{ cursor: "pointer" }}>
        <FlagImageAtom
          width={"50px"}
          height="25px"
          src={url_image}
          _hover={{ cursor: "pointer" }}
        />
      </RadioAtom>
      <Text textAlign={"center"} as="p" fontSize={fontSizeText}>
        {name_flag}
      </Text>
    </Box>
  );
};
