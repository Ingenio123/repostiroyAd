import { IPromoDTO } from "../../dto/PromoDTO";
export interface IPromoRepository {
  getPromos(): Promise<Array<IPromoDTO>>;
}
