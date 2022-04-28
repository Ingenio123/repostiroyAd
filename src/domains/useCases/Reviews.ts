import { IReviewRepository } from "./repository-interfaces/iReview";
import { IReviewsDTO } from "../dto/ReviewDTO";
import { IReviewsUseCases } from "./interfaces/iReviews";
class ReviewsUseCases implements IReviewsUseCases {
  constructor(private readonly reviewRepo: IReviewRepository) {}
  async getReviews(): Promise<IReviewsDTO[]> {
    return await this.reviewRepo.getReviews();
  }
}

export default ReviewsUseCases;
