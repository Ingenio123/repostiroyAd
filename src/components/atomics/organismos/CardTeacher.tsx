import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BoxAtom } from "../atomo/Card";
import { FlexAtom } from "../atomo/Flex";
import { StackAtom } from "../atomo/Stack";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ModalMolecula } from "../../../components/atomics/moleculas/ModalMolecula";
import { ITeacherEntity } from "../../../domains/aggregates/interfaces/iTeacher";

import { ModalAddFlagOrganismo } from "./ModalFlag";
import { ModalCalendarOrganismo } from "./ModalCalendarOrganismo";
import { FC } from "react";
import { IFlagVM } from "../../../vm/flagList";
import { ModalImageUpdateOrganismo } from "./ModalUpdataImageOrganismo";

// ####################################
interface IPropsCard {
  FlagVMList: Array<IFlagVM>;
  data: Array<ITeacherEntity>;
  handleDelete: Function;
}
interface PropStateTeacher {
  id: string;
  nameTeacher: string;
  urlImage: string;
}

//#################################
export const CardTeacherOrganismo: FC<IPropsCard> = ({
  FlagVMList,
  data,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [State, setState] = useState<any>("");
  const [ModalFlag, setModalFlag] = useState<boolean>(false);
  const [ModalCalendar, setModalCalendar] = useState<boolean>(false);
  const [ModalUpdateImage, setModalUpdateImage] = useState<boolean>(false);
  //
  const [id, setId] = useState<any>("");
  const [SelectTeacher, setSelectTeacher] = useState<PropStateTeacher>({
    id: "",
    nameTeacher: "",
    urlImage: "",
  });

  const history = useHistory();

  const Dropdown = (index: any) => {
    if (index === State) return setState(null);
    return setState(index);
  };

  const handleClick = (id: string) => {
    history.push(`/admin/update/teacher/${id}`);
  };

  const handleClickModal = (id: string) => {
    setId(id);
    return onOpen();
  };

  const handleClickModalFlag = () => {
    setModalFlag((prev) => !prev);
  };

  const handleSelect = (id: any, nameTeacher: any, urlImage: any) => {
    setSelectTeacher({
      ...SelectTeacher,
      id,
      nameTeacher,
      urlImage,
    });
  };

  const handleClickModalCalendar = () => {
    setModalCalendar((prev) => !prev);
  };
  const handleClickMolalUpdateImage = () => {
    setModalUpdateImage((prev) => !prev);
  };

  return (
    <>
      <Text
        as="h2"
        fontWeight="bold"
        fontSize="3xl"
        lineHeight="normal"
        mt="2rem"
        textAlign="center"
      >
        Teacher's profile
      </Text>
      <StackAtom as="div" mt="30px" m="0 auto">
        <Box w="70%" m="0 auto">
          {data.map((item: any, index: number) => {
            return (
              <FlexAtom key={index} mt="20px">
                <BoxAtom
                  as="div"
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                >
                  <BoxAtom as="div" display="flex">
                    <Avatar size="xl" mr="2" src={item.imgUrl} />
                    <Text
                      fontWeight="bold"
                      fontSize={"2xl"}
                      alignSelf="center"
                      justifySelf={"flex-start"}
                    >
                      {item.name}{" "}
                    </Text>
                  </BoxAtom>

                  <Button
                    alignSelf={"center"}
                    size={"md"}
                    bg="brand.900"
                    colorScheme="brand"
                    onClick={() => Dropdown(index)}
                    alignItems="center"
                  >
                    Edit
                  </Button>
                  {/* <Text fontSize="medium">{item.eslogan}</Text> */}
                </BoxAtom>

                {State === index && (
                  <Box borderTop="1px" borderColor="gray.200" p="2" mt="3">
                    <Text fontWeight={"medium"}>Description</Text>
                    <Text fontWeight={"normal"} mb="2">
                      {item.description}
                    </Text>
                    <Text fontWeight={"medium"}>Profesional Background</Text>
                    <Text fontWeight={"normal"} mb="2">
                      {item.profBackground}
                    </Text>
                    <Text fontWeight={"medium"}>Interests</Text>
                    <Text fontWeight={"normal"} mb="2">
                      {item.interests}
                    </Text>
                    <Flex width="100%" justifyContent="space-between">
                      <div>
                        <Button
                          alignSelf={"flex-end"}
                          justifySelf={"flex-end"}
                          size={"sm"}
                          colorScheme="blue"
                          bg="blue.500"
                          mr="20px"
                          onClick={() => handleClick(item.id)}
                        >
                          Profile
                        </Button>
                        <Button
                          alignSelf={"flex-end"}
                          justifySelf={"flex-end"}
                          size={"sm"}
                          bg="blue.500"
                          colorScheme="blue"
                          mr="20px"
                          onClick={() => {
                            handleSelect(item.id, item.name, item.imgUrl);
                            handleClickModalFlag();
                          }}
                        >
                          Languages
                        </Button>
                        <Button
                          alignSelf={"flex-end"}
                          justifySelf={"flex-end"}
                          size={"sm"}
                          bg="blue.500"
                          colorScheme="blue"
                          mr="20px"
                          onClick={() => {
                            handleSelect(item.id, item.name, item.imgUrl);
                            handleClickModalCalendar();
                            //
                          }}
                        >
                          Calendar
                        </Button>
                        <Button
                          alignSelf={"flex-end"}
                          justifySelf={"flex-end"}
                          size={"sm"}
                          bg="blue.500"
                          colorScheme="blue"
                          mr="20px"
                          onClick={() => {
                            handleSelect(item.id, item.name, item.imgUrl);
                            handleClickMolalUpdateImage();
                          }}
                        >
                          Photo
                        </Button>
                      </div>

                      <Button
                        alignSelf={"flex-end"}
                        justifySelf={"flex-end"}
                        size={"sm"}
                        bg="red.500"
                        colorScheme="red"
                        mr="20px"
                        onClick={() => handleClickModal(item.id)}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Box>
                )}
              </FlexAtom>
            );
          })}
        </Box>
        <ModalMolecula
          handleDelete={props.handleDelete}
          isOpen={isOpen}
          id={id}
          onClose={onClose}
        />
      </StackAtom>
      <ModalAddFlagOrganismo
        handleClickModalFlag={handleClickModalFlag}
        isOpenModal={ModalFlag}
        FlagVMList={FlagVMList}
        SelectTeacher={SelectTeacher}
      />
      <ModalCalendarOrganismo
        titleModal="Add Calendar"
        handleClickModalFlag={handleClickModalCalendar}
        isOpenModal={ModalCalendar}
        SelectTeacher={SelectTeacher}
      />
      <ModalImageUpdateOrganismo
        titleModal="Update image teacher"
        handleClickModalFlag={handleClickMolalUpdateImage}
        isOpenModal={ModalUpdateImage}
        SelectTeacher={SelectTeacher}
      />
    </>
  );
};
