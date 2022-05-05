import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import FormLegend from "../atomo/FormLegend";
export const TablePromo = () => {
  return (
    <TableContainer whiteSpace={"nowrap"}>
      <FormLegend>View or Delete Promo</FormLegend>
      <Table size="sm" variant="simple">
        <Thead>
          <Tr>
            <Th>Promo title</Th>
            <Th>Promo description</Th>
            <Th>Promo code</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>data</Td>
            <Td>data</Td>
            <Td>data</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
