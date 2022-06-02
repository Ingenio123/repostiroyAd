import Combobox from "../../components/atomics/organismos/Autocomplete";
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

interface Item {
  label: string;
  value: string;
}

const AddLessons = () => {
  const { data, loading, error } = useGetStudents();
  const [ItemState, setItemState] = useState([]);
  const [ItemSelect, setItemSelect] = useState<string>("");
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

          <Box as="form">
            {ItemSelect !== "" && (
              <>
                <FormControl>
                  <FormLabel htmlFor="email">Add lesson</FormLabel>
                  <Input type="number" placeholder="2" />
                </FormControl>
                <FormControl mt="2">
                  <Button colorScheme={"blue"} type="submit">
                    Submit
                  </Button>
                </FormControl>
              </>
            )}
          </Box>
        </Box>
        {/*  */}
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
