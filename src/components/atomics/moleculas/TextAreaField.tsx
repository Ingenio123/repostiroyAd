import { forwardRef } from "react";
import { Box, Text, Flex, Textarea } from "@chakra-ui/react";

type TextAreaFieldProps = {
  label: string;
  placeholder: string;
  type?: string | "string";
  gridArea?: { [key: string]: string };
  errors: { message: string } | undefined;
  [prop: string]: unknown;
};

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  (props, ref) => {
    const { label, placeholder, type = "text", gridArea, ...other } = props;

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
            my="2"
            color={props["errors"] ? "inputError" : "black"}
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
        <Textarea
          placeholder={placeholder}
          ref={ref}
          border="1px solid"
          borderColor={props["errors"] ? "inputError" : "inputBorder"}
          id={label}
          {...other}
        />
      </Box>
    );
  }
);

TextAreaField.displayName = "TextAreaField";

export default TextAreaField;
