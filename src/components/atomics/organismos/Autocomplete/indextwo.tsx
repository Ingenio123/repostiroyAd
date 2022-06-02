import React, { useState, ReactElement } from "react";
import Downshift, { useCombobox } from "downshift";
import { matchSorter } from "match-sorter";
import {
  Input,
  List,
  ListItem,
  Flex,
  Text,
  IconButton,
  ListProps,
  forwardRef,
  InputProps,
  ListItemProps,
} from "@chakra-ui/react";

interface ComboListProps extends ListProps {
  isOpen: "none" | null;
}
interface ListItemLiProps extends ListItemProps {
  itemIndex: number;
  highlightedIndex: number;
}

const ComboboxInput = forwardRef<InputProps, "input">(({ ...props }, ref) => {
  return <Input {...props} ref={ref} />;
});

const ComboboxList = forwardRef<ComboListProps, "ul">(
  ({ display, isOpen, ...props }, ref) => {
    return (
      <List
        as="ul"
        display={isOpen ? "" : "none"}
        py={2}
        {...props}
        ref={ref}
      />
    );
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

export interface Item {
  label: string;
  value: string;
}
function defaultOptionFilterFunc<T>(items: T[], inputValue: string) {
  return matchSorter(items, inputValue, { keys: ["value", "label"] });
}

export interface CUIAutoCompleteProps<T extends Item> {
  items: T[];
  optionFilterFunc?: (items: T[], inputValue: string) => T[];
  onCreateItem?: (item: T) => void;
}

export const Combobox = <T extends Item>(
  props: CUIAutoCompleteProps<T>
): ReactElement<CUIAutoCompleteProps<T>> => {
  const {
    items,
    optionFilterFunc = defaultOptionFilterFunc,
    onCreateItem,
  } = props;

  const [isCreating, setIsCreating] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [inputItems, setInputItems] = React.useState<T[]>(items);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    reset,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue, selectedItem }) => {
      const filteredItems = optionFilterFunc(items, inputValue || "");
      setInputItems(filteredItems);
    },
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          console.log("Click | Enter | Blur");
          if (selectedItem) {
            console.log("Se ha selecionado" + JSON.stringify(selectedItem));
            // setSelectedOption(...SelectedOption,selectedItem);
          }
          break;
        default:
          break;
      }
    },
  });

  return (
    <Flex direction="column" align="center">
      <Flex {...getComboboxProps()} direction="column" flex="1 1 auto">
        <Flex direction="row" alignItems="baseline">
          <ComboboxInput
            {...getInputProps({ onChange: reset })}
            placeholder="Search..."
            flex="0 0 auto"
            width={500}
            mt={3}
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
              {...getItemProps({
                key: item.label,
                item,
                index,
              })}
              highlightedIndex={highlightedIndex}
              key={index}
              itemIndex={index}
            >
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </Flex>
      {/* {JSON.stringify(selectedOption)} */}
    </Flex>
  );
};
