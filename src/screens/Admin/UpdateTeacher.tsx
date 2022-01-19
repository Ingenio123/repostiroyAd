import { FormMolecula } from "../../components/atomics/moleculas/FormModelecula";
import { Box, Flex } from "@chakra-ui/react";
const UpdateTeacher = () => {
  return (
    <Flex justifyContent={"center"} my="1rem">
      <Box
        display={"flex"}
        alignItems={"center"}
        border="1px"
        borderColor={"gray.400"}
        borderRadius={"md"}
        p="2rem"
      >
        {/* <BoxImageMolecula urlImage="https://bit.ly/sage-adebayo" /> */}
        <FormMolecula />
      </Box>
    </Flex>
  );
};

export default UpdateTeacher;
