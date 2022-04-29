export interface IReviewsDTO {
  _id?: string;
  url_image: string;
  country_iso: string;
  name_user: string;
  language_is_learning: string;
  description: string;
}

export interface IReviewParams {
  _id: string;
  url_image: string;
  countryIso: string;
  name_user: string;
  languages_is_learning: string;
  description: string;
}

class ReviewsDTO implements IReviewsDTO {
  readonly _id: string;
  readonly url_image: string;
  readonly country_iso: string;
  readonly name_user: string;
  readonly language_is_learning: string;
  readonly description: string;
  //
  constructor(params: IReviewParams) {
    this._id = params._id;
    this.country_iso = params.countryIso;
    this.description = params.description;
    this.language_is_learning = params.languages_is_learning;
    this.name_user = params.name_user;
    this.url_image = params.url_image;
  }
}

export default ReviewsDTO;
