import { HTMLAttributes, ReactNode } from "react";
import { BoxAtom } from "../atomo/Card";

// import {}  from '../atomo/'
interface IProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
export const FormMoleculaO = ({ children, ...props }: IProps) => {
  return (
    <BoxAtom width="50%">
      <form style={{ width: "100%" }} {...props}>
        {children}
      </form>
    </BoxAtom>
  );
};
