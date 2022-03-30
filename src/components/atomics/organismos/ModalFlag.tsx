import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
  Box,
  Stack,
  Divider,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { RadioAtom } from "../atomo/AtomRadio";
import { FlagImageAtom } from "../atomo/FlagImageAtom";
import { IFlagVM } from "../../../vm/flagList";
import { FC, useState } from "react";
//############################
interface PropStateTeacher {
  id: string;
  nameTeacher: string;
  urlImage: string;
}
interface ModalAddFlagProps {
  FlagVMList: IFlagVM[];
  isOpenModal: boolean;
  handleClickModalFlag(): void;
  SelectTeacher: PropStateTeacher;
}

//###########################
export const ModalAddFlagOrganismo: FC<ModalAddFlagProps> = ({
  FlagVMList,
  handleClickModalFlag,
  isOpenModal,
  SelectTeacher,
  ...props
}) => {
  const toast = useToast();
  const [FlagId, setIdFlag] = useState<string>("");
  const handleSubmit = async () => {
    let idTacher = SelectTeacher.id;
    let data = {
      FlagId,
    };

    const resp = await fetch(
      `https://www.ingenioapi.com/data/addFlagToTeachers/${idTacher}`,
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
        title: "Add flag.",
        description: "Add Flag to teacher successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      handleClickModalFlag();
    }
  };
  return (
    <Modal
      isCentered
      isOpen={isOpenModal}
      onClose={handleClickModalFlag}
      motionPreset="slideInBottom"
      size="3xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Flags</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody>
          <RadioGroup onChange={(val) => setIdFlag(val)}>
            <Stack
              direction={"row"}
              wrap="wrap"
              justifyContent={"space-between"}
            >
              {FlagVMList.map((i) => (
                <Box key={i.id}>
                  <FlagImageAtom width="100px" h="50px" src={i.url_image} />
                  <RadioAtom
                    fontSizeText="lg"
                    text={i.name_flag}
                    value={i.id}
                  />
                </Box>
              ))}
            </Stack>
          </RadioGroup>
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
        </ModalBody>
        <ModalFooter>
          <Button
            isDisabled={false}
            colorScheme={"blue"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
