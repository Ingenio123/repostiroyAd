import { WrapItem, Avatar, Input } from "@chakra-ui/react";
import { BoxAtom } from "../atomo/Card";
import { ChangeEvent, useRef } from "react";

type InputEvent = ChangeEvent<HTMLInputElement>;

export const BoxImageMolecula = ({ urlImage, onChanguePicture }: any) => {
  // let hiddenInput: InputEvent;
  let hiddenInput = useRef<HTMLInputElement | null>(null);
  const hanldeClick = () => hiddenInput.current?.click();
  return (
    <BoxAtom >
      <WrapItem>
        <Avatar
          size="2xl"
          name="Image Teacher"
          src={urlImage}
          _hover={{
            cursor: "pointer",
          }}
          onClick={hanldeClick}
        />
        {/* <InputImage ref={hiddenInput} /> */}
        <Input
          hidden
          type="file"
          accept="image/png,image/jpeg"
          ref={(el) => {
            hiddenInput.current = el;
          }}
          onChange={onChanguePicture}
        />
      </WrapItem>
    </BoxAtom>
  );
};
