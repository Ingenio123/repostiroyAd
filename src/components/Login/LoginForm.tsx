import { ChangeEvent, FC, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";

//

interface IProps {
  accredit(email: string, password: string): void;
}
//
const LoginForm: FC<IProps> = ({ accredit }) => {
  const color = useColorModeValue("brand", "gray");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const updateFnc = event.target.name === "email" ? setEmail : setPassword;
    updateFnc(event.target.value);
  };

  const handleClickAccredit = () => {
    accredit(email, password);
  };
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            value={email}
            name="email"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel color="brand">Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={password}
            name="password"
          />
        </FormControl>

        <Button
          colorScheme={color}
          color={"white"}
          variant="solid"
          width="full"
          mt={4}
          onClick={handleClickAccredit}
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
