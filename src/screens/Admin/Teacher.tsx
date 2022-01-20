import { useEffect } from "react";
import di from "../../di";
import { useteacherListState } from "../../hooks/teacherRecoil";
import { CardTeacherOrganismo } from "../../components/atomics/organismos/CardTeacher";

function AddTeacher() {
  const [list, setList] = useteacherListState();

  useEffect(() => {
    const asyncFnc = async () => {
      const data = await di.teacher.getTeachers();
      setList(data);
    };
    asyncFnc();
  }, [setList]);

  const handleDelete = (id: string) => {
    const teachers = list.filter((user) => user.id !== id);
    setList(teachers);
    console.log("refresh");
  };
  return (
    <div>
      <CardTeacherOrganismo handleDelete={handleDelete} data={list} />
    </div>
  );
}

export default AddTeacher;
