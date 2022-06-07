import { HTMLAttributes, ReactNode } from "react";
import { BoxAtom } from "../atomo/Card";

// import {}  from '../atomo/'
interface IProps extends HTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
  handleSubmit?: any;
  width?: string;
}
export const FormMoleculaO = ({ handleSubmit, children, ...props }: IProps) => {
  return (
    <BoxAtom
      width={props.width ? props.width : "50%"}
      display="block"
      m="0 auto"
    >
      <form style={{ width: "100%" }} onSubmit={handleSubmit} {...props}>
        {children}
      </form>
    </BoxAtom>
  );
};
