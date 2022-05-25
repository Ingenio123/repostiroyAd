import { SearchComponent } from "../../components/atomics/organismos/SearchComponent";
import React, { useState, useEffect } from "react";
import { useGetStudents } from "../../hooks/useQuery";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";

// import {} from "chakra-dayzed-datepicker";

interface Item {
  label: string;
  value: string;
}

const AddLessons = () => {
  const { data, loading, error } = useGetStudents();
  const [ItemState, setItemState] = useState<Item[]>([]);
  useEffect(() => {
    if (data?.student) {
      let datos = data.student.map((e: any) => {
        return {
          label: e.email,
          value: e._id,
        };
      });
      setItemState([...ItemState, datos]);
    }

    return () => {};
  }, [data]);
  if (loading) return "loading";
  if (error) return "An error has occurred: ";

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <Box width="2xl">
        <SearchComponent data={ItemState.length > 0 ? ItemState[0] : []} />
      </Box>
      <Stack direction={["column", "row"]}>
        <Box width="2xl">
          <FormControl>
            <FormLabel htmlFor="email">Add lesson</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl mt="2">
            <Button colorScheme={"blue"} type="submit">
              Submit
            </Button>
          </FormControl>
        </Box>
        <Box width="2xl">
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
      </Stack>
    </>
  );
};
export default AddLessons;
