import { Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Nav from "./Navigate/Nav";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <Container maxWidth={"container.xl"}>{children}</Container>
    </>
  );
};

export default Layout;
