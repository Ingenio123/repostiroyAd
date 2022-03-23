import { Table, Tbody, Tr, Td, Button, Thead, Th } from "@chakra-ui/react";
import { FC } from "react";
import { ICuponCodeVM } from "../../../vm/CuponCodeList";

interface TableMoleculaProps {
  codeList: Array<ICuponCodeVM>;
}
export const TableMolecula: FC<TableMoleculaProps> = ({ codeList }) => {
  const FormatDate = (d: Date) => {
    // console.log(d);
    // console.log(d.getFullYear());
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
    <Table size="sm" mt="2rem">
      <Thead>
        <Tr>
          <Th>Val Code</Th>
          <Th>Val</Th>
          <Th>num uses</Th>
          <Th>caducado</Th>
          <Th>expires</Th>
          <Th>Accion</Th>
        </Tr>
      </Thead>
      <Tbody>
        {codeList.map((e) => {
          return (
            <Tr>
              <Td>text</Td>
              <Td>{e.valor}</Td>
              <Td>{e.numberUses}</Td>
              <Td>{e.caducado ? "true" : "false"}</Td>
              <Td>{e.expiresCode}</Td>
              <Td>
                <Button
                  type="button"
                  colorScheme={"green"}
                  size="sm"
                  mr=".2rem"
                >
                  Update
                </Button>
                <Button type="button" colorScheme={"red"} size="sm">
                  Delete
                </Button>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
