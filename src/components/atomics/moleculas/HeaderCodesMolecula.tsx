import { Box, Grid } from "@chakra-ui/react";
//atoms Component
import TextAtom from "../atomo/TextSpanAtom";

const HeaderCodesMolecula = (): JSX.Element => {
  return (
    <Grid templateColumns="repeat(5,1fr)" mt="1rem">
      <Box
        as="div"
        textAlign={"center"}
        borderRight="1px"
        borderColor={"gray.400"}
      >
        {/* fontWeight="700" size="1rem" */}
        <TextAtom size="1rem" color="gray.800" fontWeight="bold">
          Val Code
        </TextAtom>
      </Box>
      <Box
        as="div"
        textAlign={"center"}
        borderRight="1px"
        borderColor={"gray.400"}
      >
        <TextAtom size="1rem" color="gray.800" fontWeight="bold">
          Val
        </TextAtom>
      </Box>
      <Box
        as="div"
        textAlign={"center"}
        borderRight="1px"
        borderColor={"gray.400"}
      >
        <TextAtom size="1rem" color="gray.800" fontWeight="bold">
          num uses
        </TextAtom>
      </Box>
      <Box
        as="div"
        textAlign={"center"}
        borderRight="1px"
        borderColor={"gray.400"}
      >
        <TextAtom size="1rem" color="gray.800" fontWeight="bold">
          expires
        </TextAtom>
      </Box>
      <Box
        as="div"
        textAlign={"center"}
        borderRight="1px"
        borderColor={"gray.400"}
      >
        {/* fontWeight="700" size="1rem" */}
        <TextAtom size="1rem" color="gray.800" fontWeight="bold">
          Accion
        </TextAtom>
      </Box>
    </Grid>
  );
};

export default HeaderCodesMolecula;
