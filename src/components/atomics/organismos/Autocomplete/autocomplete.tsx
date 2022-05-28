import React from "react";
import { ListItem } from "@chakra-ui/react";

interface IProps {
  email: string;
  onSelectItem: () => void;
}

const AutoComplete = ({ email, onSelectItem }: IProps) => {
  return (
    <ListItem
      px={2}
      py={1}
      borderBottom="1px solid rgba(0,0,0,0.01)"
      color="gray.500"
      aria-label="Selected"
      onClick={onSelectItem}
    >
      <p>{email}</p>
    </ListItem>
  );
};

export default AutoComplete;
