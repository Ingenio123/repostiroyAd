import { Table, Tbody, Tr, Td, Button, Thead, Th, Box } from "@chakra-ui/react";
import { FC } from "react";
import { ICuponCodeVM } from "../../../vm/CuponCodeList";

interface TableMoleculaProps {
  codeList: Array<ICuponCodeVM>;
}
export const TableMolecula: FC<TableMoleculaProps> = ({ codeList }) => {
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
    <Box overflowY="auto" maxHeight="300px">
      <Table width="100%" size="sm" mt="2rem">
        <Thead>
          <Tr>
            <Td fontWeight="medium">Coupon Name</Td>
            <Td fontWeight="medium">Discount</Td>
            <Td fontWeight="medium">N° uses</Td>
            <Td fontWeight="medium">Status</Td>
            <Td fontWeight="medium">Expiration date</Td>
          </Tr>
        </Thead>
        <Tbody>
          {codeList.map((e) => {
            return (
              <Tr key={e.id}>
                <Td textAlign={"center"}>text</Td>
                <Td textAlign={"center"}>{e.valor}</Td>
                <Td textAlign={"center"}>{e.numberUses}</Td>
                <Td textAlign={"center"}>
                  {e.caducado ? "Expired" : "Active"}
                </Td>
                <Td textAlign={"center"}>{FormatDate(e.expiresCode)}</Td>
                <Td display="flex">
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
    </Box>
  );
};
