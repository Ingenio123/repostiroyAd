import { Box, useRadioGroup } from "@chakra-ui/react";
import CustomRadio from "../atomo/CustomRadio";
import { forwardRef } from "react";
import { useController } from "react-hook-form";
type ToogleProps = {
  control: any;
  name: string;
  defaultValue?: string;
};

export const Toggle = forwardRef<HTMLInputElement, ToogleProps>(
  ({ control, name, defaultValue, ...props }, ref) => {
    const { field } = useController({
      name,
      control,
      rules: { required: "Toggle is required" },
      defaultValue,
    });

    const { getRootProps, getRadioProps } = useRadioGroup({
      ...field,
    });

    return (
      <Box
        {...getRootProps()}
        display="flex"
        justifyContent={"center"}
        gap="1rem"
      >
        <CustomRadio {...getRadioProps({ value: "false" })}>
          Regular
        </CustomRadio>
        <CustomRadio {...getRadioProps({ value: "true" })}>Kids</CustomRadio>
      </Box>
    );
  }
);
