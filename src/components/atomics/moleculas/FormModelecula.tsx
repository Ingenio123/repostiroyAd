import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export const FormMolecula = ({ ...props }: any) => {
  // console.log(watch("example"));

  return (
    <Box textAlign="left" minWidth={"600px"}>
      <form onSubmit={props.onSubmit}>
        <FormControl>
          <FormLabel>Teacher's name</FormLabel>
          <Input
            type="text"
            placeholder="Enter name teacher"
            value={props.NameTeacher}
            onChange={(e) => props.setNameTeacher(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Slogan</FormLabel>
          <Textarea
            value={props.EsloganTeacher}
            placeholder="Here is a sample placeholder"
            onChange={(e) => props.setEsloganTeacher(e.target.value)}
          ></Textarea>
        </FormControl>
        <FormControl>
          <FormLabel>Teacher's description</FormLabel>
          <Textarea
            value={props.DescriptionTeacher}
            placeholder="Here is a sample placeholder"
            onChange={(e) => props.setDescriptionTeacher(e.target.value)}
          ></Textarea>
        </FormControl>
        <FormControl>
          <FormLabel>Profesional Background</FormLabel>
          <Textarea
            value={props.profBackgroundTeacher}
            placeholder="Here is a sample placeholder"
            onChange={(e) => props.setProfBackgroundTeacher(e.target.value)}
          ></Textarea>
        </FormControl>
        <FormControl mb="1rem">
          <FormLabel>Teacher's interests</FormLabel>
          <Textarea
            value={props.InterestsTeacher}
            placeholder="Here is a sample placeholder"
            onChange={(e) => props.setInterestsTeacher(e.target.value)}
          ></Textarea>
        </FormControl>
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Button
            type="submit"
            colorScheme={"blue"}
            fontSize={"lg"}
            width="200px"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
