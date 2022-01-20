import { Container } from "@chakra-ui/react";
import { FC } from "react";
import Nav from "./Navigate/Nav";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      <Container maxWidth={"container.xl"}>{children}</Container>
    </>
  );
};

export default Layout;
