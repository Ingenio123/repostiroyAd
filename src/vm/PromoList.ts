import { IPromoEntity } from "../domains/aggregates/interfaces/iPromo";

export interface IPromoVM {
  _id: string;
  promo_titile: string;
  promo_description: string;
  promo_code: string;
  promo_conditions: string;
  promo_url_picture: string;
  promo_active: boolean;
}

class PromoListVM implements IPromoVM {
  private readonly __id: string;
  private readonly _promo_title: string;
  private readonly _promo_description: string;
  private readonly _promo_code: string;
  private readonly _promo_conditions: string;
  private readonly _promo_url_picture: string;
  private readonly _promo_active: boolean;

  constructor(params: IPromoEntity) {
    this.__id = params._id;
    this._promo_conditions = params.promo_conditons;
    this._promo_title = params.promo_title;
    this._promo_description = params.promo_description;
    this._promo_code = params.promo_code;
    this._promo_url_picture = params.promo_url_picture;
    this._promo_active = params.promo_active;
  }

  get _id() {
    return this.__id;
  }
  get promo_titile() {
    return this._promo_title;
  }

  get promo_description() {
    return this._promo_description;
  }
  get promo_code() {
    return this._promo_code;
  }

  get promo_conditions() {
    return this._promo_conditions;
  }
  get promo_url_picture() {
    return this._promo_url_picture;
  }
  get promo_active() {
    return this._promo_active;
  }
}

export default PromoListVM;
