import { ITeacherEntity } from "../domains/aggregates/interfaces/iTeacher";
import {
  atom,
  selector,
  useRecoilState as UseRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const teacherList = atom<Array<ITeacherEntity>>({
  key: "teacherList",
  default: [],
});

const teacherListState = selector({
  key: "teacherListState",
  get: ({ get }) => get(teacherList),
});

export const useGetteacherList = () => {
  return useRecoilValue(teacherListState);
};

export const useSetteacherList = () => {
  return useSetRecoilState(teacherList);
};

export const useteacherListState = () => {
  const RecoilState = UseRecoilState(teacherList);
  return RecoilState;
};
