import { forwardRef } from "react";
import { useRadio, Button, Box } from "@chakra-ui/react";
const CustomRadio = forwardRef<HTMLInputElement>(
  ({ children, ...props }, ref) => {
    const { state, getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps({ ref });
    const checkbox = getCheckboxProps();

    return (
      <Box as="label" display="inline-block">
        <input {...input} />
        <Button
          as="div"
          {...checkbox}
          cursor="pointer"
          colorScheme={state.isChecked ? "blue" : "gray"}
        >
          {children}
        </Button>
      </Box>
    );
  }
);

export default CustomRadio;
