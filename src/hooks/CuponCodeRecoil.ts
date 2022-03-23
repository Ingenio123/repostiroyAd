import { ICuponEntity } from "../domains/aggregates/interfaces/iCuponAggregate";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const cuponCodeList = atom<Array<ICuponEntity>>({
  key: "cuponCodeList",
  default: [],
});

const cuponCodeState = selector({
  key: "cuponCodeState",
  get: ({ get }) => get(cuponCodeList),
});

export const useGetCuponCodeList = () => {
  return useRecoilValue(cuponCodeState);
};

export const useSetCodeCuponList = () => {
  return useSetRecoilState(cuponCodeList);
};

export const useCodeCuponListState = () => {
  return useRecoilState(cuponCodeList);
};
