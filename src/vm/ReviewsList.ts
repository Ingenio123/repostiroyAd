import { IReviewEntity } from "../domains/aggregates/interfaces/iReviews";
export interface IReviewVM {
  _id: string;
  languages_is_learning: string;
  name_user: string;
  description: string;
  url_image: string;
  country_iso: string;
}

class ReviewVM implements IReviewVM {
  readonly _id: string;
  readonly name_user: string;
  readonly description: string;
  readonly url_image: string;
  readonly country_iso: string;
  readonly languages_is_learning: string;

  constructor(params: IReviewEntity) {
    this._id = params._id;
    this.name_user = params.name_user;
    this.description = params.description;
    this.url_image = params.url_image;
    this.country_iso = params.country_iso;
    this.languages_is_learning = params.language_is_learning;
  }
  get id() {
    return this._id;
  }
  get nameUser() {
    return this.name_user;
  }
  get countryIso() {
    return this.country_iso;
  }

  get descriptionGet() {
    return this.description;
  }

  get urlImage() {
    return this.url_image;
  }
  get languageIsLearning() {
    return this.languages_is_learning;
  }
}

export default ReviewVM;
