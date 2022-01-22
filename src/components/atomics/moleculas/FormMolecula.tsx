import { HTMLAttributes, ReactNode } from "react";
import { BoxAtom } from "../atomo/Card";

// import {}  from '../atomo/'
interface IProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  handleSubmit: any;
}
export const FormMoleculaO = ({
  handleSubmit,
  children,

  ...props
}: IProps) => {
  return (
    <BoxAtom width="50%">
      <form style={{ width: "100%" }} onSubmit={handleSubmit} {...props}>
        {children}
      </form>
    </BoxAtom>
  );
};
