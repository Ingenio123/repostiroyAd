import { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import ThemeSelector from "../theme/ThemeSelector";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import di from "../../di";
import { useSetToken } from "../../hooks/sessionRecoil";

const LoginArea: FC = () => {
  const setToken = useSetToken();
  const handleClickAccreditation = async (email: string, password: string) => {
    const token = await di.session.login(email, password);
    di.session.setToken(token);
    setToken(token);
  };

  // useEffect(() => {
  //   (async () => {
  //     const storageToken = await di.session.getToken();
  //     console.log(storageToken);
  //     if (storageToken) {
  //       di.session.setToken(storageToken);
  //       setToken(storageToken);
  //     }
  //   })();
  // }, []);
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <ThemeSelector />
        <Box p={4}>
          <LoginHeader />
          <LoginForm accredit={handleClickAccreditation} />
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginArea;
