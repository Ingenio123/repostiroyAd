import { IReviewRepository } from "./repository-interfaces/iReview";
import { IReviewsDTO } from "../dto/ReviewDTO";
import { IReviewsUseCases } from "./interfaces/iReviews";
class ReviewsUseCases implements IReviewsUseCases {
  constructor(private readonly reviewRepo: IReviewRepository) {}
  async getReviews(): Promise<IReviewsDTO[]> {
    return await this.reviewRepo.getReviews();
  }
  async deleteReview(id: string): Promise<boolean> {
    return await this.reviewRepo.deleteReview(id);
  }
}

export default ReviewsUseCases;
