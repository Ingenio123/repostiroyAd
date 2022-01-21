import { HTMLAttributes, ReactNode } from "react";
import { BoxAtom } from "../atomo/Card";

// import {}  from '../atomo/'
interface IProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  handleSubmit: any;
  handleSubmitHooksForm: any;
}
export const FormMoleculaO = ({
  handleSubmit,
  children,
  handleSubmitHooksForm,
  ...props
}: IProps) => {
  return (
    <BoxAtom width="50%">
      <form
        style={{ width: "100%" }}
        onSubmit={handleSubmitHooksForm(handleSubmit)}
        {...props}
      >
        {children}
      </form>
    </BoxAtom>
  );
};
