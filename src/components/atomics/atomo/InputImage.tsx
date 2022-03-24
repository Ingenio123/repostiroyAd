import { Input } from "@chakra-ui/react";
import { forwardRef } from "react";
type FormFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  gridArea?: { [key: string]: string };
  errors: { message: string } | undefined;
  [prop: string]: unknown;
};

export const InputImage = forwardRef<HTMLInputElement, FormFieldProps>(
  (props, ref) => {
    const { label, placeholder, gridArea, ...other } = props;
    let errorMessage;
    if (props.errors) {
      errorMessage = props.errors.message;
    }
    return (
      <Input {...other} type="file" accept="image/png, image/jpeg" ref={ref} />
    );
  }
);
