import { useEffect, useState } from "react";
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
  return (
    <div>
      <CardTeacherOrganismo data={list} />
    </div>
  );
}

export default AddTeacher;
