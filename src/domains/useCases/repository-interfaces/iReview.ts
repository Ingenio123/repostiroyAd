import { IReviewsDTO } from "./../../dto/ReviewDTO";
export interface IReviewRepository {
  getReviews(): Promise<Array<IReviewsDTO>>;
}
