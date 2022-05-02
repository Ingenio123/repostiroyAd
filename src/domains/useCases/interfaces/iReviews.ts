import { IReviewsDTO } from "../../dto/ReviewDTO";
export interface IReviewsUseCases {
  getReviews(): Promise<Array<IReviewsDTO>>;
  deleteReview(id: string): Promise<boolean>;
}
