import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const ImageOrganismo = ({ children }: IProps) => {
  return <h2>Image {children}</h2>;
};
