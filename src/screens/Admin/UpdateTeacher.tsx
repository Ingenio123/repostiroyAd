import { FormMolecula } from "../../components/atomics/moleculas/FormModelecula";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useteacherListState } from "../../hooks/teacherRecoil";
import di from "../../di";
import { ITeacherEntity } from "../../domains/aggregates/interfaces/iTeacher";

/**
 * ESTE ES LA PAGE DE UPDATE TEACHER
 * URL => /admin/update/teacher
 * @props => data:object
 */
const UpdateTeacher = () => {
  const params = useParams<any>();
  const history = useHistory();
  const [list, setList] = useteacherListState();
  const [Name, setName] = useState<any>("");
  const [Eslogan, setEslogan] = useState<any>("");
  const [ProfBackground, setProfBackground] = useState<any>("");
  const [Interests, setInterests] = useState<any>("");
  const [Description, setDescription] = useState<any>("");

  useEffect(() => {
    console.log(params.id);
    //load teacher
    const teacher = list.find((item) => item.id === params.id);
    console.log(teacher);
    setName(teacher?.name);
    setEslogan(teacher?.eslogan);
    setProfBackground(teacher?.profBackground);
    setInterests(teacher?.interests);
    setDescription(teacher?.description);
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const newData: ITeacherEntity = {
      name: Name,
      eslogan: Eslogan,
      profBackground: ProfBackground,
      interests: Interests,
      description: Description,
    };
    await di.teacher.updateTeacher(newData, params.id);

    history.push("/admin/teacher");
  };
  return (
    <Flex justifyContent={"center"} my="1rem">
      <Box
        display={"flex"}
        alignItems={"center"}
        border="1px"
        borderColor={"gray.400"}
        borderRadius={"md"}
        p="2rem"
      >
        {/* <BoxImageMolecula urlImage="https://bit.ly/sage-adebayo" /> */}
        <FormMolecula
          NameTeacher={Name}
          EsloganTeacher={Eslogan}
          DescriptionTeacher={Description}
          profBackgroundTeacher={ProfBackground}
          InterestsTeacher={Interests}
          setNameTeacher={setName}
          setEsloganTeacher={setEslogan}
          setInterestsTeacher={setInterests}
          setDescriptionTeacher={setDescription}
          setProfBackgroundTeacher={setProfBackground}
          onSubmit={onSubmit}
        />
      </Box>
    </Flex>
  );
};

export default UpdateTeacher;
