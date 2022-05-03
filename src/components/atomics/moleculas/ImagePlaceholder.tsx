import { Box, Input, WrapItem } from "@chakra-ui/react";
import React, { useRef } from "react";

// interface Props {
// }

export const BoxImagePlaceholder = ({ urlImage, onChanguePicture }: any) => {
  let hiddenInput = useRef<HTMLInputElement | null>(null);
  const handleClick = () => hiddenInput.current?.click();
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      maxHeight={"180px"}
      overflowY="auto"
    >
      <WrapItem width="472px" height={"479px"}>
        <Box
          backgroundColor={"gray.100"}
          as={"img"}
          onClick={handleClick}
          src={urlImage}
          w="100%"
          h="100%"
          objectFit={"cover"}
          _hover={{
            cursor: "pointer",
          }}
        ></Box>
      </WrapItem>
      <Input
        hidden
        type="file"
        accept="image/png,image/jpeg"
        ref={(el) => {
          hiddenInput.current = el;
        }}
        onChange={onChanguePicture}
      />
    </Box>
  );
};
