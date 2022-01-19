import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import ButtonAtom from "./Button";

interface Datos {
  _name: string;
}

const AtomTable = ({ data }: any) => {
  return (
    <>
      <Table mt={8} size="sm" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Names</Th>
            <Th>Slogan</Th>
            <Th>Description</Th>
            <Th>Interests</Th>
            <Th>Prof Backround</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: Datos, index: number) => (
            <Tr key={index}>
              <Td>{item._name}</Td>
              <Td>asdasd </Td>
              <Td>asdasd </Td>
              <Td>asdasd </Td>
              <Td>asdasd </Td>
              <Td>
                <ButtonAtom colorScheme="pink" text="delete" />
                <ButtonAtom text="Update" colorScheme="blue" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {}
    </>
  );
};

export default AtomTable;
