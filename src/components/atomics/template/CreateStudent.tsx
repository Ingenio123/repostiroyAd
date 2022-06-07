import AutoComplete from "../organismos/Autocomplete/index";
import { useGetUsers } from "../../../hooks/useQuery";
export const CreateStudentTemplate = () => {
  const { data, loading, error } = useGetUsers();

  return <>{/* <AutoComplete  /> */}</>;
};
