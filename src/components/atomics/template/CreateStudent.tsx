import AutoComplete from "../organismos/Autocomplete/index";
import { FormNewStudentOrganismo } from "../organismos/FromNewStundet";
import { useGetUsers } from "../../../hooks/useQuery";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

export const CreateStudentTemplate = () => {
  const { data, loading, error } = useGetUsers();
  const [DataUsers, setDataUsers] = useState([]);
  const [ItemSelect, setItemSelect] = useState<string>("");

  useEffect(() => {
    if (data?.users) {
      let datos = data.users.map((e: any) => {
        return e["email"];
      });
      setDataUsers(datos);
    }
    return () => {};
  }, [data]);

  const handleSelect = (e: string) => {
    console.log("Handle select:");
    setItemSelect(e);
  };

  return (
    <Box width="50%">
      {/* <Text></Text> */}
      <AutoComplete items={DataUsers} handleSelect={handleSelect} />
      {/* {JSON.stringify(data?.users)} */}
      {ItemSelect !== undefined && ItemSelect !== "" ? (
        <>
          <FormNewStudentOrganismo email={ItemSelect} />
        </>
      ) : null}
    </Box>
  );
};
