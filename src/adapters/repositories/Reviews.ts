import ReviewsDTO, { IReviewParams } from "./../../domains/dto/ReviewDTO";
import { IHttp } from "./../infrastructures/interfaces/iHttp";
import { IReviewRepository } from "./../../domains/useCases/repository-interfaces/iReview";
import { IReviewsDTO } from "../../domains/dto/ReviewDTO";
import URI from "../../envConfig";
class ReviewsRepository implements IReviewRepository {
  constructor(private readonly http: IHttp) {}

  async getReviews(): Promise<IReviewsDTO[]> {
    const response = await this.http.request({
      method: "GET",
      url: `${URI.apiUrl}/v1/data/get/reviews`,
    });
    return response.reviews.map(
      (review: IReviewParams) => new ReviewsDTO(review)
    );
  }
  async deleteReview(id: string): Promise<boolean> {
    const response = await this.http.request({
      method: "DELETE",
      url: `${URI.apiUrl}/v1/data/delete/review/${id}`,
    });
    let res = !response.error && true;
    return res;
  }
}

export default ReviewsRepository;
