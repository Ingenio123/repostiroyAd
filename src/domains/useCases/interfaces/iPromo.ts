import { IPromoDTO } from "../../dto/PromoDTO";
export interface IPromoUseCases {
  getPromo(): Promise<Array<IPromoDTO>>;
}
