import { IHttp } from "./../infrastructures/interfaces/iHttp";
import { IPromoRepository } from "./../../domains/useCases/repository-interfaces/iPromo";
import PromoDTO, { IPromoDTO, IPromoParams } from "../../domains/dto/PromoDTO";
import URI from "../../envConfig";

class PromoRepository implements IPromoRepository {
  constructor(private readonly http: IHttp) {}

  async getPromos(): Promise<IPromoDTO[]> {
    const response = await this.http.request({
      method: "GET",
      url: `${URI.apiUrl}/v1/data/get/promos`,
    });
    return response.promos.map((promo: IPromoParams) => new PromoDTO(promo));
  }
}

export default PromoRepository;
