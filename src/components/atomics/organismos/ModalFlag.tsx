import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
  CheckboxGroup,
  Checkbox,
  Box,
  Grid,
  Divider,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import di from "../../../di";
import { FlagMolecula } from "../moleculas/FlagMoleculat";
import { IFlagVM } from "../../../vm/flagList";
import { FC, useState } from "react";
import { StringOrNumber } from "@chakra-ui/utils";
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
  const [FlagId, setIdFlag] = useState<StringOrNumber[]>([]);
  //
  const handleSubmit = async () => {
    let idTacher = SelectTeacher.id;
    let data = {
      FlagId,
    };
    // di.teacher.assignFlagTeacher()
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
        title: "Successful",
        description: "Languages have been updated",
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
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Choose Languages</ModalHeader>
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
          <CheckboxGroup onChange={(val) => setIdFlag(val)}>
            <Grid
              gridTemplateColumns={"repeat(2,1fr)"}
              columnGap="1rem"
              height="100%"
            >
              {FlagVMList.map((i) => (
                <FlagMolecula
                  key={i.id}
                  url_image={i.url_image}
                  fontSizeText="base"
                  id={i.id}
                  name_flag={i.name_flag}
                />
              ))}
            </Grid>
          </CheckboxGroup>
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
