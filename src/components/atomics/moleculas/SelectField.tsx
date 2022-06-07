import { forwardRef, ReactNode } from "react";
import { Box, Flex, Text, Select } from "@chakra-ui/react";

type OptionsArray = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  placeholder: string;
  gridArea?: { [key: string]: string };
  options: OptionsArray[];
  errors: { message: string } | undefined;
  [prop: string]: unknown;
};

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (props, ref) => {
    const {
      errors,
      label,
      placeholder,
      step,
      type,
      children,
      gridArea,
      options,
      ...other
    } = props;
    let errorMessage;
    if (props.errors) {
      errorMessage = props.errors.message;
    }
    return (
      <Box gridArea={gridArea}>
        <Flex justify="space-between">
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
            <Text
              aria-live="polite"
              color="inputError"
              fontSize="0.75rem"
              mb={2}
            >
              {errorMessage}
            </Text>
          )}
        </Flex>
        <Select
          ref={ref}
          {...other}
          placeholder={placeholder}
          borderColor={props["errors"] ? "inputError" : "inputBorder"}
          id={label}
        >
          {options.map((item: OptionsArray) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </Select>
      </Box>
    );
  }
);
SelectField.displayName = "SelectField";
export default SelectField;
