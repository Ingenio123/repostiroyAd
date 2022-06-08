import { Checkbox, Box, Flex, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

type FormFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  step?: string;
  gridArea?: { [key: string]: string };
  errors: { message: string } | undefined;
  [prop: string]: unknown;
};

const FormField = forwardRef<HTMLInputElement, FormFieldProps>((props, ref) => {
  const { label, placeholder, type, gridArea, step = "1", ...other } = props;
  let errorMessage;

  if (props.errors) {
    errorMessage = props.errors.message;
  }

  return (
    <Box gridArea={gridArea}>
      <Flex justify="center">
        <Box
          as="label"
          fontSize="1rem"
          fontWeight="medium"
          htmlFor={label}
          display="inline-block"
          mb={2}
          color={props["errors"] && "inputError"}
        >
          {label}
        </Box>
        {props.errors && (
          <Text aria-live="polite" color="inputError" fontSize="0.75rem" mb={2}>
            {errorMessage}
          </Text>
        )}
      </Flex>
      <Checkbox ref={ref} {...other} type={"checkbox"} id={label} />
    </Box>
  );
});
FormField.displayName = "FormField";

export default FormField;
