import { forwardRef } from "react";
import { Box, Flex, Input } from "@chakra-ui/react";

type SearchProps = {
  label: string;
  placeholder: string;
  type?: "text" | "search";
  [prop: string]: unknown;
};

const SearchInput = forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  const { label, placeholder, type } = props;
  return (
    <Box w="100%">
      <Flex justify="space-between">
        <Box
          as="label"
          mb="2"
          display="inline-block"
          fontSize="1rem"
          fontWeight="medium"
        >
          {label}
        </Box>
      </Flex>
      <Input
        w="md"
        type={type}
        placeholder={placeholder ? placeholder : "search"}
      />
    </Box>
  );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
