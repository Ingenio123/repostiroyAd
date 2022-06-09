import {
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  Checkbox,
  Th,
  Button,
  Box,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { useAddNewPackage } from "../../../hooks/useAddNewPackage";

type TableHeadeData = {
  language: string;
  lessonTotal: string;
};

type DataArray = {
  idiom: string;
  lessonTotal: number;
  kids: boolean;
  _id: string;
  expiresCours: Date;
};

interface IProps {
  dataHead: TableHeadeData;
  data: DataArray[];
  CheckOne: string | null;
  handleCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TableStudentLessons = ({
  dataHead,
  data,
  handleCheck,
  CheckOne,
}: IProps) => {
  const { language, lessonTotal } = dataHead;
  const { handleMorePackage } = useAddNewPackage();
  const FormatDate = (dateExpires: Date) => {
    // console.log(d);
    // console.log(d.getFullYear());
    const d = new Date(dateExpires);
    // console.log(d);
    const year = d.getFullYear(); // 2019
    const date = d.getDate();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayIndex = d.getDay();
    const dayName = days[d.getDay()]; // Thu
    const monthIndex = d.getMonth();
    const monthName = months[monthIndex];
    const formatted = `${dayName}, ${date} ${monthName} ${year}`;

    return formatted;
  };
  return (
    <>
      <Table width="100%" size="sm" mt="2rem">
        <Thead>
          <Tr>
            <Th>Select</Th>
            <Th>Id</Th>
            <Th>{language}</Th>
            <Th>{lessonTotal}</Th>
            <Th>Expires Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: DataArray, index: number) => (
            <Tr key={index}>
              <Td>
                <Checkbox
                  size="md"
                  colorScheme="brand"
                  onChange={handleCheck}
                  value={item._id}
                  isChecked={CheckOne === item._id ? true : false}
                />
              </Td>
              <Td>{index}</Td>
              <Td>
                {item.idiom} {item.kids && "Kids"}
              </Td>
              <Td>{item.lessonTotal}</Td>
              <Td>{FormatDate(item.expiresCours)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button
        mt="3"
        display={"flex"}
        alignItems="center"
        colorScheme={"brand"}
        ml="auto"
        onClick={handleMorePackage}
        size="sm"
      >
        <Box as={CgMathPlus} display="inline-block" size="1.1em" />
        Add package
      </Button>
    </>
  );
};
