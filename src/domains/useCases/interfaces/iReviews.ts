import { IReviewsDTO } from "../../dto/ReviewDTO";
export interface IReviewsUseCases {
  getReviews(): Promise<Array<IReviewsDTO>>;
}
