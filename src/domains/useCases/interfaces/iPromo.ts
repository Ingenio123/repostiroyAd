import { IPromoDTO } from "../../dto/PromoDTO";
export interface IPromoUseCases {
  getPromos(): Promise<Array<IPromoDTO>>;
}
