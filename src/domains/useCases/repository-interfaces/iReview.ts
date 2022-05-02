import { IReviewsDTO } from "./../../dto/ReviewDTO";
export interface IReviewRepository {
  getReviews(): Promise<Array<IReviewsDTO>>;
  deleteReview(id: string): Promise<boolean>;
}
