import { ICuponCodePresenter } from "./interfaces/iCuponCode";
import { ICuponCode } from "../../domains/useCases/interfaces/iCuponCode";
import { ICuponEntity } from "../../domains/aggregates/interfaces/iCuponAggregate";

class CuponCodePresenter implements ICuponCodePresenter {
  constructor(private readonly useCases: ICuponCode) {}

  async getCuponCodes(): Promise<ICuponEntity[]> {
    return await this.useCases.getCupons();
  }
}

export default CuponCodePresenter;
