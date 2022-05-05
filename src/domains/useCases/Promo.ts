import { IPromoRepository } from "./repository-interfaces/iPromo";
import { IPromoDTO } from "./../dto/PromoDTO";
import { IPromoUseCases } from "./interfaces/iPromo";

class PromoUseCases implements IPromoUseCases {
  constructor(private readonly promoRepo: IPromoRepository) {}
  async getPromo(): Promise<Array<IPromoDTO>> {
    return await this.promoRepo.getPromos();
  }
}
export default PromoUseCases;
