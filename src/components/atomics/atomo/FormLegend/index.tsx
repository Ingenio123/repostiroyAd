import { Box } from "@chakra-ui/react";
import { FC } from "react";

const FormLegend: FC = ({ children }): JSX.Element => {
  return (
    <Box
      as="legend"
      textTransform={"uppercase"}
      color="accent"
      fontSize="0.8125rem"
      letterSpacing="0.0581rem"
      fontWeight="bold"
      mb="1rem"
    >
      {children}
    </Box>
  );
};

export default FormLegend;
