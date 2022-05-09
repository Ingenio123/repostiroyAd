import { IReviewEntity } from "../domains/aggregates/interfaces/iReviews";

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const reviewsList = atom<Array<IReviewEntity>>({
  key: "Reviews",
  default: [],
});

const reviewsState = selector({
  key: "reviewState",
  get: ({ get }) => get(reviewsList),
});

export const useGetReviewList = () => {
  return useRecoilValue(reviewsState);
};

export const useSetReviewList = () => {
  return reviewsList;
};

export const useReviewListState = () => {
  return useRecoilState(reviewsList);
};
