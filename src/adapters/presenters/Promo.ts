import { IPromoDTO } from "../../domains/dto/PromoDTO";
import { IPromoUseCases } from "../../domains/useCases/interfaces/iPromo";
import { IPromoRepository } from "../../domains/useCases/repository-interfaces/iPromo";

class PromoPresenter implements IPromoRepository {
  constructor(private readonly useCases: IPromoUseCases) {}
  async getPromos(): Promise<Array<IPromoDTO>> {
    return await this.useCases.getPromos();
  }
}

export default PromoPresenter;
