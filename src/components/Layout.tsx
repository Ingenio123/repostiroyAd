import { Container } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import Nav from "./Navigate/Nav";

interface Props {}

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <Nav />
      <Container maxWidth={"container.xl"}>{children}</Container>
    </>
  );
};

export default Layout;
