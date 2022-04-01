import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Box,
  Divider,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
// import di from "../../../di";
import { FC, useState, FormEvent, useRef } from "react";

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
export const ModalImageUpdateOrganismo: FC<ModalAddFlagProps> = ({
  handleClickModalFlag,
  isOpenModal,
  SelectTeacher,
  titleModal,
  ...props
}) => {
  const toast = useToast();
  const [Picture, setPicture] = useState<string>("");
  const [ImageData, setImgData] = useState<any>(
    "https://via.placeholder.com/150"
  );
  const { handleSubmit } = useForm({ mode: "onBlur" });
  let hiddenInput = useRef<HTMLInputElement | null>(null);
  //
  const handleSubmitToClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let idTacher = SelectTeacher.id;
    //
    handleSubmit(async (data) => {
      formData.append("imageTeacher", Picture);
      const resp = await fetch(
        `https://www.ingenioapi.com/data/updateImgProfile/${idTacher}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (resp.ok) {
        toast({
          title: "Successful",
          description: "The photo has been updated",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setPicture("");
        setImgData("https://via.placeholder.com/150");
        handleClickModalFlag();
      }
    })(e);
  };
  //

  const handleChangeImage = (event: any) => {
    if (event.target.files[0]) {
      //   console.log("picture: ", event.target.files);
      setPicture(event.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  //
  const handleClickImage = () => hiddenInput.current?.click();

  const handleClose = () => {
    setPicture("");
    setImgData("https://via.placeholder.com/150");
    handleClickModalFlag();
  };

  return (
    <Modal
      isCentered
      isOpen={isOpenModal}
      onClose={handleClose}
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
          <form onSubmit={handleSubmitToClick}>
            <Box
              display={"flex"}
              flexDirection="column"
              alignItems={"center"}
              my="1rem"
            >
              <Image
                borderRadius="full"
                boxSize="150px"
                src={ImageData}
                alt="Teacher Ingenio"
                onClick={handleClickImage}
                _hover={{
                  cursor: "pointer",
                }}
              />
              <Input
                hidden
                type="file"
                accept="image/png, image/jpeg"
                ref={(element) => {
                  hiddenInput.current = element;
                }}
                onChange={handleChangeImage}
              />
              <Text fontSize={"2xl"} fontWeight="bold">
                {SelectTeacher.nameTeacher}
              </Text>
              <Button colorScheme={"blue"} type="submit" mt="1rem">
                Submit
              </Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
