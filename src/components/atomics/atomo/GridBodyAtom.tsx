import { FC } from "react";
import { GridProps, Grid } from "@chakra-ui/react";

const GridBodyMolecula: FC<GridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default GridBodyMolecula;
