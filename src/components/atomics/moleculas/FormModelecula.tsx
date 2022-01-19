import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const FormMolecula = () => {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();
  console.log(watch("example"));

  const onSubmit = (data: any) => console.log(data);
  return (
    <Box textAlign="left" minWidth={"600px"} onSubmit={handleSubmit(onSubmit)}>
      <form>
        <FormControl>
          <FormLabel>Name Teacher</FormLabel>
          <Input type="email" placeholder="Enter name teacher" />
        </FormControl>
        <FormControl>
          <FormLabel>Eslogan</FormLabel>
          <Textarea placeholder="Here is a sample placeholder"></Textarea>
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea placeholder="Here is a sample placeholder"></Textarea>
        </FormControl>
        <FormControl>
          <FormLabel>Profesional Background</FormLabel>
          <Textarea placeholder="Here is a sample placeholder"></Textarea>
        </FormControl>
        <FormControl mb="1rem">
          <FormLabel>Interests</FormLabel>
          <Textarea placeholder="Here is a sample placeholder"></Textarea>
        </FormControl>
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Button colorScheme={"blue"} fontSize={"lg"} width="200px">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
