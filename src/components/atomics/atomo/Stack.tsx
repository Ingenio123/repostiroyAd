import { Stack } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  sapacign?: string;
  border?: string | "1px";
}

export const StackAtom: FC<IProps> = ({ children, sapacign, border }) => {
  return (
    <Stack
      mt="30px"
      direction={["column", "row"]}
      spacing={sapacign}
      border={border}
    >
      {children}
    </Stack>
  );
};
