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
        mt="4"
      >
        <CustomRadio {...getRadioProps({ value: "false" })} color="brand">
          Regular
        </CustomRadio>
        <CustomRadio {...getRadioProps({ value: "true" })} color="brand">
          Kids
        </CustomRadio>
      </Box>
    );
  }
);
