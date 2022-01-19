import { WrapItem, Avatar } from "@chakra-ui/react";

export const BoxImageMolecula = ({ urlImage }: any) => {
  return (
    <WrapItem>
      <Avatar size="2xl" name="Segun Adebayo" src={urlImage} />
    </WrapItem>
  );
};
