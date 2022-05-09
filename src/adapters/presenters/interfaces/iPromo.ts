import { IPromoEntity } from "../../../domains/aggregates/interfaces/iPromo";

export interface IPromoPresenter {
  getPromos(): Promise<Array<IPromoEntity>>;
}
