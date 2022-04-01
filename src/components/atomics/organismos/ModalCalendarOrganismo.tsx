import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  Input,
  Select,
  Box,
  Divider,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import di from "../../../di";
import { FC, useState, ChangeEvent } from "react";
import { StringOrNumber } from "@chakra-ui/utils";
//############################
interface PropStateTeacher {
  id: string;
  nameTeacher: string;
  urlImage: string;
}
interface ModalAddFlagProps {
  isOpenModal: boolean;
  handleClickModalFlag(): void;
  SelectTeacher: PropStateTeacher;
  titleModal: string;
}

//###########################
export const ModalCalendarOrganismo: FC<ModalAddFlagProps> = ({
  handleClickModalFlag,
  isOpenModal,
  SelectTeacher,
  titleModal,
  ...props
}) => {
  const toast = useToast();
  const [Time, setTime] = useState<string>("");
  const [Calendar, setUrlCalendar] = useState<string>("");
  const [Check, setCheck] = useState<boolean>(false);
  //
  const handleSubmit = async () => {
    let idTacher = SelectTeacher.id;
    let data = {
      time: Time,
      url_calendar: Calendar,
    };
    // di.teacher.assignFlagTeacher()
    const resp = await fetch(
      `https://www.ingenioapi.com/data/addCalendarTeacher/${idTacher}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (resp.ok) {
      toast({
        title: "Successful",
        description: "The event's url has been added",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      if (Check) {
        setUrlCalendar("");
        return;
      }
      handleClickModalFlag();
    }
  };
  //

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // console.log(event.target.value);
    setTime(event.target.value);
  };
  //
  const handleChangueInput = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setUrlCalendar(e.target.value);
  };

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    let checked = e.target.checked;
    setCheck(checked);
  };

  return (
    <Modal
      isCentered
      isOpen={isOpenModal}
      onClose={handleClickModalFlag}
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{titleModal}</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody
          display={"flex"}
          justifyContent="center"
          gridColumnGap={"3rem"}
        >
          <Box
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            my="1rem"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={SelectTeacher.urlImage}
              alt="Dan Abramov"
            />
            <Text fontSize={"2xl"} fontWeight="bold">
              {SelectTeacher.nameTeacher}
            </Text>
          </Box>
          {/*  */}
          <Box w="50%">
            <Text fontWeight={"medium"}>Type of event</Text>
            <Select
              size="md"
              onChange={handleChange}
              placeholder="choose time"
              mb="2"
            >
              <option value="25">25 min lesson</option>
              <option value="30">30 min lesson</option>
              <option value="45">45 min lesson</option>
              <option value="60">60 min lesson</option>
            </Select>
            <Text fontWeight={"medium"}>Calendar url</Text>
            <Input
              type="text"
              placeholder="Url of Ingenio Calendar"
              mb="2"
              onChange={handleChangueInput}
              value={Calendar}
            />
            <Checkbox onChange={handleChecked}>
              <Text>Add more event types</Text>
            </Checkbox>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme={"blue"} onClick={handleSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
