import { WrapItem, Avatar, Input } from "@chakra-ui/react";
import { BoxAtom } from "../atomo/Card";

export const BoxImageMolecula = ({ urlImage, onChanguePicture }: any) => {
  return (
    <BoxAtom>
      <WrapItem>
        <Avatar size="2xl" name="Segun Adebayo" src={urlImage} />
        <Input
          type="file"
          accept="image/png, image/jpeg"
          onChange={onChanguePicture}
        />
      </WrapItem>
    </BoxAtom>
  );
};
