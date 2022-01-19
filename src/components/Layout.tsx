import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { Switch } from "react-router-dom";

const Layout: FC = ({ children }) => {
  return <Container maxWidth={"container.xl"}>{children}</Container>;
};

export default Layout;
