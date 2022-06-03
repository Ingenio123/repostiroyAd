import Combobox from "../../components/atomics/organismos/Autocomplete";
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useGetStudents, useGetOneStudent } from "../../hooks/useQuery";
import { useAddLesson } from "../../hooks/useMutation";
import { TableStudentLessons } from "../../components/atomics/moleculas/TableStudentLessons";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";

const AddLessons = () => {
  const { data, loading, error } = useGetStudents();
  const { addLessons, dataUseMutation } = useAddLesson();
  const [
    getOneStudent,
    {
      data: DataOneStundet,
      error: GetOneStudentError,
      loading: LoadingGetOneStudent,
    },
  ] = useGetOneStudent();

  const [ItemState, setItemState] = useState([]);
  const [ItemSelect, setItemSelect] = useState<string>("");
  const [AddClassNumber, setAddClassNumber] = useState<number>(0);

  useEffect(() => {
    if (data?.student) {
      let datos = data.student.map((e: any) => {
        return e["email"];
      });
      setItemState(datos);
    }

    return () => {};
  }, [data]);
  if (loading) return "loading";
  if (error) return "An error has occurred: ";

  const handleSelect = (item: string) => {
    setItemSelect(item);
    if (item !== "") return getOneStudent({ variables: { email: item } });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) setAddClassNumber(0);
    let numero: number = parseInt(e.target.value);
    setAddClassNumber(numero);
  };

  const SendAdd = () => {
    addLessons({
      variables: {
        email: "jlzyjose@gmail.com", // ItemSelect
        idiom: "English",
        kids: false,
        numClassAdd: AddClassNumber,
      },
    });
  };
  return (
    <>
      <Stack direction={["column", "row"]}>
        <Box width="2xl">
          <FormControl>
            <FormLabel htmlFor="email">Search Student by email</FormLabel>
            {ItemState.length > 0 && (
              <Combobox handleSelect={handleSelect} items={ItemState} />
            )}
          </FormControl>
          {!LoadingGetOneStudent && DataOneStundet && (
            <TableStudentLessons
              dataHead={{ language: "Language", lessonTotal: "Total lessons" }}
              data={DataOneStundet.studentOne.courses}
            />
          )}
          <Box>
            {ItemSelect !== "" && (
              <>
                <FormControl>
                  <FormLabel htmlFor="email">Add lesson</FormLabel>
                  <Input
                    type="number"
                    placeholder="2"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl mt="2">
                  <Button colorScheme={"blue"} type="button" onClick={SendAdd}>
                    Submit
                  </Button>
                </FormControl>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="email">Extend expire date</FormLabel>
                    <Input type="text" />
                  </FormControl>
                  <FormControl mt="2">
                    <Button colorScheme={"blue"} type="submit">
                      Submit
                    </Button>
                  </FormControl>
                </Box>
              </>
            )}
          </Box>
        </Box>
        {/*  */}
      </Stack>
    </>
  );
};
export default AddLessons;
