import { useEffect } from "react";
import di from "../../di";
import AtomTable from "../../components/atomics/atomo/table";
import { useteacherListState } from "../../hooks/teacherRecoil";
import { StackAtom } from "../../components/atomics/atomo/Stack";
import { BoxAtom } from "../../components/atomics/atomo/Card";
import { Avatar, Box, Text, Badge, Button } from "@chakra-ui/react";
import { FlexAtom } from "../../components/atomics/atomo/Flex";

function AddTeacher() {
  const [list, setList] = useteacherListState();
  useEffect(() => {
    const asyncFnc = async () => {
      const data = await di.teacher.getTeachers();
      setList(data);
    };
    asyncFnc();
  }, []);
  return (
    <div>
      <StackAtom sapacign="24px">
        <Box w="30%" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40%">
          <FlexAtom>
            <BoxAtom>
              <Avatar src="https://res.cloudinary.com/ingenio/image/upload/v1629822674/ixqjugfd5qdebupqxxln.png" />
              <div style={{ marginLeft: "10px" }}>
                <Text fontWeight="bold">Name Teacher</Text>
                <Text fontSize="sm">UI Engineer</Text>
              </div>
            </BoxAtom>
            <Button
              alignSelf={"flex-end"}
              justifySelf={"flex-end"}
              size={"sm"}
              bg="gray.300"
            >
              view more
            </Button>
          </FlexAtom>
          <FlexAtom mt="10px">
            <BoxAtom>
              <Avatar src="https://res.cloudinary.com/ingenio/image/upload/v1629822674/ixqjugfd5qdebupqxxln.png" />
              <div style={{ marginLeft: "10px" }}>
                <Text fontWeight="bold">Name Teacher</Text>
                <Text fontSize="sm">UI Engineer</Text>
              </div>
            </BoxAtom>
            <Button
              alignSelf={"flex-end"}
              justifySelf={"flex-end"}
              size={"sm"}
              bg="gray.300"
            >
              view more
            </Button>
          </FlexAtom>
          <FlexAtom mt="10px">
            <BoxAtom>
              <Avatar src="https://res.cloudinary.com/ingenio/image/upload/v1629822674/ixqjugfd5qdebupqxxln.png" />
              <div style={{ marginLeft: "10px" }}>
                <Text fontWeight="bold">Name Teacher</Text>
                <Text fontSize="sm">UI Engineer</Text>
              </div>
            </BoxAtom>
            <Button
              alignSelf={"flex-end"}
              justifySelf={"flex-end"}
              size={"sm"}
              bg="gray.300"
            >
              view more
            </Button>
          </FlexAtom>
        </Box>
        <Box w="30%" h="40px" bg="pink.100">
          3
        </Box>
      </StackAtom>
      {/* <AtomTable data={list} /> */}
    </div>
  );
}

export default AddTeacher;
