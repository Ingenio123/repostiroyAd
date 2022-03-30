import { useEffect } from "react";
import di from "../../di";
import { useteacherListState } from "../../hooks/teacherRecoil";
import { useFlagListState } from "../../hooks/FlagRecoil";
import { CardTeacherOrganismo } from "../../components/atomics/organismos/CardTeacher";
import FlagVM from "../../vm/flagList";

function AddTeacher() {
  const [list, setList] = useteacherListState();
  const [listFlag, setListFlag] = useFlagListState();
  const FlagVMList = listFlag.map((flagEntity) => new FlagVM(flagEntity));

  useEffect(() => {
    const asyncFnc = async () => {
      const data = await di.teacher.getTeachers();
      setList(data);
      const dataflag = await di.flag.getFlags();
      setListFlag(dataflag);
    };
    asyncFnc();
  }, []);
  //
  const handleDelete = (id: string) => {
    const teachers = list.filter((user) => user.id !== id);
    setList(teachers);
    console.log("refresh");
  };
  return (
    <div>
      <CardTeacherOrganismo
        FlagVMList={FlagVMList}
        handleDelete={handleDelete}
        data={list}
      />
    </div>
  );
}

export default AddTeacher;
