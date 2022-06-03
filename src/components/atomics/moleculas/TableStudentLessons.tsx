import { Table, Thead, Tr, Td, Tbody, Checkbox, Th } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

const CustomHookCheck = () => {
  const [CheckOne, setCheckOne] = useState<number | null>(null);

  const handleCheck = (index: number) => {
    console.log(index);
    if (index === CheckOne) {
      return setCheckOne(null);
    }
    return setCheckOne(index);
  };

  return {
    handleCheck,
    CheckOne,
  };
};

type TableHeadeData = {
  language: string;
  lessonTotal: string;
};

type DataArray = {
  idiom: string;
  lessonTotal: number;
  kids: boolean;
};

interface IProps {
  dataHead: TableHeadeData;
  data: DataArray[];
}

export const TableStudentLessons = ({ dataHead, data }: IProps) => {
  const { language, lessonTotal } = dataHead;
  const [CheckOne, setCheckOne] = useState<number | null>(null);
  //   const { handleCheck, CheckOne } = CustomHookCheck();
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    let index: number = parseInt(e.target.value);
    if (CheckOne === index) return setCheckOne(null);
    return setCheckOne(index);
  };
  return (
    <Table width="100%" size="sm" mt="2rem">
      <Thead>
        <Tr>
          <Th>Select</Th>
          <Th>Id</Th>
          <Th>{language}</Th>
          <Th>{lessonTotal}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item: DataArray, index: number) => (
          <Tr key={index}>
            <Td>
              <Checkbox
                size="md"
                colorScheme="blue"
                onChange={handleCheck}
                value={index}
                isChecked={CheckOne === index ? true : false}
              />
            </Td>
            <Td>{index}</Td>
            <Td>
              {item.idiom} {item.kids && "Kids"}
            </Td>
            <Td>{item.lessonTotal}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
