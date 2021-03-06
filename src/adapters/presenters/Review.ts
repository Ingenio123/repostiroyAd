import { IReviewsDTO } from "../../domains/dto/ReviewDTO";
import { IReviewsUseCases } from "./../../domains/useCases/interfaces/iReviews";
import { IReviewRepository } from "./../../domains/useCases/repository-interfaces/iReview";
class ReviewPresenter implements IReviewRepository {
  constructor(private readonly useCases: IReviewsUseCases) {}
  async getReviews(): Promise<IReviewsDTO[]> {
    return await this.useCases.getReviews();
  }
  async deleteReview(id: string): Promise<boolean> {
    return await this.useCases.deleteReview(id);
  }
}

export default ReviewPresenter;
