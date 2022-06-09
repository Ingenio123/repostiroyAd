import Combobox from "../../components/atomics/organismos/Autocomplete";
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useGetStudents, useGetOneStudent } from "../../hooks/useQuery";
import { useAddLesson, useAddNewExpiredPackage } from "../../hooks/useMutation";
import { TableStudentLessons } from "../../components/atomics/moleculas/TableStudentLessons";
import DatePickerSingle from "../../components/atomics/atomo/DatePicker/datepickerSingle";
import AddPackageForm from "../../components/atomics/organismos/AddPackage";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useAddNewPackage } from "../../hooks/useAddNewPackage";

import { AddNewPackageProvider } from "../../context/AddNewPackageContext";
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
  const [
    addNewDate,
    { loading: LoadingaddNewDate, data: DateExpires, error: ErrorExpiresDate },
  ] = useAddNewExpiredPackage();

  const [ItemState, setItemState] = useState([]);
  const [ItemSelect, setItemSelect] = useState<string>("");
  const [AddClassNumber, setAddClassNumber] = useState<number>(0);
  const [CheckOne, setCheckOne] = useState<string | null>(null);
  const [newDate, setNewDate] = useState<Date>(new Date());

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
    if (item !== "") {
      return getOneStudent({ variables: { email: item } });
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) setAddClassNumber(0);
    let numero: number = parseInt(e.target.value);
    setAddClassNumber(numero);
  };
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    let index: string = e.target.value;
    if (CheckOne === index) return setCheckOne(null);
    return setCheckOne(index);
  };
  const SendAdd = () => {
    addLessons({
      variables: {
        email: ItemSelect, // ItemSelect
        idPackage: CheckOne,
        numClassAdd: AddClassNumber,
      },
    });
  };
  const addNewDateExpires = () => {
    addNewDate({
      variables: {
        email: ItemSelect,
        dateExpires: newDate,
        idPackage: CheckOne,
      },
    });
  };

  return (
    <AddNewPackageProvider>
      <Stack direction={["column", "row"]} spacing="8">
        <Box width="2xl">
          <FormControl>
            <FormLabel htmlFor="email">Search Student by email</FormLabel>
            {ItemState.length > 0 && (
              <Combobox handleSelect={handleSelect} items={ItemState} />
            )}
          </FormControl>
          {!LoadingGetOneStudent && DataOneStundet && (
            <>
              <TableStudentLessons
                dataHead={{
                  language: "Language",
                  lessonTotal: "Total lessons",
                }}
                data={DataOneStundet.studentOne.courses}
                handleCheck={handleCheck}
                CheckOne={CheckOne}
              />
            </>
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
                  <Button colorScheme={"brand"} type="button" onClick={SendAdd}>
                    Submit
                  </Button>
                </FormControl>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="email">Extend expire date</FormLabel>
                    <DatePickerSingle
                      name="date-picker"
                      DatePicker={newDate}
                      setDatePicker={setNewDate}
                    />
                  </FormControl>
                  <FormControl mt="2">
                    <Button
                      colorScheme={"brand"}
                      type="button"
                      onClick={addNewDateExpires}
                    >
                      Submit
                    </Button>
                  </FormControl>
                </Box>
              </>
            )}
          </Box>
        </Box>
        {/*  */}
        <AddPackageForm email={ItemSelect} />
      </Stack>
    </AddNewPackageProvider>
  );
};
export default AddLessons;
