import { useEffect } from "react";
import di from "../../di";
import { useteacherListState } from "../../hooks/teacherRecoil";
import { CardTeacherOrganismo } from "../../components/atomics/organismos/CardTeacher";

function AddTeacher() {
  const [list, setList] = useteacherListState();
  console.log(list);
  useEffect(() => {
    const asyncFnc = async () => {
      const data = await di.teacher.getTeachers();
      setList(data);
    };
    asyncFnc();
  }, []);
  return (
    <div>
      <CardTeacherOrganismo data={list} />
    </div>
  );
}

export default AddTeacher;
