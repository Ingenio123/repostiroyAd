import { IFlagEnitiy } from "../domains/aggregates/interfaces/iFlag";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const flagList = atom<Array<IFlagEnitiy>>({
  key: "flagList",
  default: [],
});

const flagState = selector({
  key: "flagState",
  get: ({ get }) => get(flagList),
});

export const useGetFlagList = () => {
  return useRecoilValue(flagState);
};

export const useSetFlagList = () => {
  return useSetRecoilState(flagList);
};

export const useFlagListState = () => {
  return useRecoilState(flagList);
};
