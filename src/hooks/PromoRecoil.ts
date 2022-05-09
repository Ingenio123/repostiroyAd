import { IPromoEntity } from "../domains/aggregates/interfaces/iPromo";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const promoList = atom<Array<IPromoEntity>>({
  key: "Promo",
  default: [],
});

const promoState = selector({
  key: "promoState",
  get: ({ get }) => get(promoList),
});

export const useGetPromoList = () => {
  return useRecoilValue(promoState);
};

export const useSetPromoList = () => {
  return useSetRecoilState(promoList);
};

export const usePromoListState = () => {
  return useRecoilState(promoList);
};
