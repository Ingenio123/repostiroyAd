export interface IPromoDTO {
  _id: string;
  promo_title: string;
  promo_description: string;
  promo_code: string;
  promo_conditons: string;
  promo_url_picture: string;
  promo_active: boolean;
}

export interface IPromoParams {
  _id: string;
  promo_title: string;
  promo_description: string;
  promo_url_picture: string;
  promo_code: string;
  promo_conditons: string;
  promo_active: boolean;
}

class PromoDTO implements IPromoDTO {
  readonly _id: string;
  readonly promo_title: string;
  readonly promo_description: string;
  readonly promo_url_picture: string;
  readonly promo_code: string;
  readonly promo_conditons: string;
  readonly promo_active: boolean;

  constructor(params: IPromoParams) {
    this._id = params._id;
    this.promo_code = params.promo_code;
    this.promo_conditons = params.promo_conditons;
    this.promo_description = params.promo_description;
    this.promo_title = params.promo_title;
    this.promo_url_picture = params.promo_url_picture;
    this.promo_active = params.promo_active;
  }
}

export default PromoDTO;
