import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const LoginHeader = () => {
  const color = useColorModeValue("brand.900", "white");
  return (
    <Box textAlign="center">
      <Heading color={color}>Sign In to Your Account</Heading>
    </Box>
  );
};

export default LoginHeader;
