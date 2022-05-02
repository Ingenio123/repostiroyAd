// Entity
import { IReviewEntity } from "../../../domains/aggregates/interfaces/iReviews";
export interface IReviewsPresenters {
  getReviews(): Promise<Array<IReviewEntity>>;
  deleteReview(id: string): Promise<boolean>;
}
