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
import di from "../../../di";

export const ModalMolecula = ({ isOpen, onClose, id, ...props }: any) => {
  const toast = useToast();
  const handleAccept = async () => {
    await di.teacher.removeTeacher(id);
    props.handleDelete(id);
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
        <ModalHeader>Delete teacher?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to delete this teacher? This action cannot be
          undone.
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
