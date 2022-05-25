import { CUIAutoComplete } from "chakra-ui-autocomplete";

interface PropsSearch {
  data: any;
}

const SearchComponent = ({ data }: PropsSearch) => {
  return (
    <CUIAutoComplete
      label="Search Student"
      items={data}
      placeholder="search by email"
    />
  );
};
export { SearchComponent };
