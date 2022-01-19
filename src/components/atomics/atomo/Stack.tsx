import { Stack } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  sapacign: string;
}

export const StackAtom: FC<IProps> = ({ children, sapacign }) => {
  return (
    <Stack mt="30px" direction={["column", "row"]} spacing={sapacign}>
      {children}
    </Stack>
  );
};
