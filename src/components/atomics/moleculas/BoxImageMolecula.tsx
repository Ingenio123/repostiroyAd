import { Avatar, WrapItem } from "@chakra-ui/react";

interface IProps {
  urlImage?: string;
}

export const BoxImageMolecula = ({ urlImage }: IProps) => {
  return (
    <WrapItem>
      <Avatar size="2xl" name="Segun Adebayo" src={urlImage} />
    </WrapItem>
  );
};
