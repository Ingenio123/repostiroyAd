import { WrapItem, Avatar } from "@chakra-ui/react";
import { BoxAtom } from "../atomo/Card";

export const BoxImageMolecula = ({ urlImage }: any) => {
  return (
    <BoxAtom>
      <WrapItem>
        <Avatar size="2xl" name="Segun Adebayo" src={urlImage} />
      </WrapItem>
    </BoxAtom>
  );
};
