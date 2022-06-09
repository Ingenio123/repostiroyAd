import { forwardRef, ReactNode } from "react";
import { useRadio, Button, Box } from "@chakra-ui/react";
type Props = {
  children: ReactNode;
  color: string;
};
const CustomRadio = forwardRef<HTMLInputElement, Props>(
  ({ children, color, ...props }, ref) => {
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
          colorScheme={state.isChecked ? color : "gray"}
          size="sm"
        >
          {children}
        </Button>
      </Box>
    );
  }
);

export default CustomRadio;
