import React, { useState, useEffect } from "react";
import { useCombobox } from "downshift";
import {
  Input,
  List,
  ListItem,
  Flex,
  forwardRef,
  ListProps,
  ListItemProps,
} from "@chakra-ui/react";
import { useAddNewPackage } from "../../../../hooks/useAddNewPackage";

interface ComboListProps extends ListProps {
  isOpen: "none" | null;
}
interface ListItemLiProps extends ListItemProps {
  itemIndex: number;
  highlightedIndex: number;
}
const ComboboxInput = forwardRef(({ ...props }, ref) => {
  return <Input {...props} ref={ref} />;
});

const ComboboxList = forwardRef<ComboListProps, "ul">(
  ({ isOpen, display, ...props }, ref) => {
    return <List display={isOpen ? "" : "none"} py={2} {...props} ref={ref} />;
  }
);

const ComboboxItem = forwardRef<ListItemLiProps, "li">(
  ({ itemIndex, highlightedIndex, ...props }, ref) => {
    const isActive = itemIndex === highlightedIndex;

    return (
      <ListItem
        transition="background-color 220ms, color 220ms"
        bg={isActive ? "teal.100" : ""}
        px={4}
        py={2}
        cursor="pointer"
        {...props}
        ref={ref}
      />
    );
  }
);
// const items = ["Seattle", "San Francisco", "Springfield", "New York", "Boston"];
interface Props {
  items: any[];
  handleSelect: (item: string) => void;
}
export default function Combobox({ items, handleSelect }: Props) {
  const { handleMinusMorePackage } = useAddNewPackage();
  const [inputItems, setInputItems] = useState(items);
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) => !inputValue || item.includes(inputValue))
      );
    },
  });
  useEffect(() => {
    if (inputItems.length > 1) return handleSelect("");
    handleSelect(inputItems[0]);
    handleMinusMorePackage();
    return () => {};
  }, [inputItems]);

  return (
    <Flex>
      <Flex {...getComboboxProps()} direction="column" flex="1 1 auto">
        <Flex direction="row">
          <ComboboxInput
            {...getInputProps()}
            placeholder="Search..."
            flex="0 0 auto"
          />
        </Flex>
        <ComboboxList
          isOpen={isOpen}
          {...getMenuProps()}
          flex={1}
          overflowY="auto"
          mt={0}
        >
          {inputItems.map((item, index) => (
            <ComboboxItem
              {...getItemProps({ item, index })}
              itemIndex={index}
              highlightedIndex={highlightedIndex}
              key={index}
            >
              {item}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </Flex>
    </Flex>
  );
}
