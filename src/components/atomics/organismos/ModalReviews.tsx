import {
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  Button,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

interface Props {
  onClose: () => void;
  openModal: boolean | false;
  title: string;
  handleDelete: () => void;
}

export const ModalReviews = ({
  onClose,
  openModal,
  title,
  handleDelete,
}: Props) => {
  return (
    <>
      <Modal isCentered={true} isOpen={openModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Estas Seguro que deseas eliminar?</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleDelete}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
