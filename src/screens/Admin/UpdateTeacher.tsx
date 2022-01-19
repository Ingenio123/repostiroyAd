import { FormMolecula } from "../../components/atomics/moleculas/FormModelecula";
import { FlexAtom } from "../../components/atomics/atomo/Flex";
import { BoxImageMolecula } from "../../components/atomics/moleculas/BoxImage";
import { Box, Flex } from "@chakra-ui/react";
const UpdateTeacher = () => {
  return (
    <Flex justifyContent={"center"} mt="2rem">
      <Box
        display={"flex"}
        alignItems={"center"}
        border="1px"
        borderColor={"gray.400"}
        borderRadius={"md"}
        p="2rem"
      >
        <BoxImageMolecula urlImage="https://bit.ly/sage-adebayo" />
        <FormMolecula />
      </Box>
    </Flex>
  );
};

export default UpdateTeacher;
