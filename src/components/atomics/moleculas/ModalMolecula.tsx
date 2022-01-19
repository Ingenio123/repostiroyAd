import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";

import Toasts from "./ToastMoleculat";

export const ModalMolecula = ({ isOpen, onClose }: any) => {
  const toast = useToast();
  const handleAccept = () => {
    toast({
      title: "Delete Success",
      description: "Teacher delete successfully",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
    return onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deseas Eliminar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius
          facere corporis minus voluptates voluptatibus eveniet unde eum vero
          est?
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={() => handleAccept()}>
            Accept
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
      <Toasts />
    </Modal>
  );
};
