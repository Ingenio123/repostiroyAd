import { ICuponCodePresenter } from "./interfaces/iCuponCode";
import { ICuponCode } from "../../domains/useCases/interfaces/iCuponCode";
import { ICuponEntity } from "../../domains/aggregates/interfaces/iCuponAggregate";

class CuponCodePresenter implements ICuponCodePresenter {
  constructor(private readonly useCases: ICuponCode) {}

  async getCuponCodes(): Promise<ICuponEntity[]> {
    return await this.useCases.getCupons();
  }
  async addCuponCode(
    codigo: string,
    discont: number,
    numero_usos: number,
    dateExpires: Date
  ): Promise<boolean> {
    return this.useCases.addCuponCode(
      codigo,
      discont,
      numero_usos,
      dateExpires
    );
  }
  delete(id: string): Promise<boolean> {
    return this.useCases.deleteCupon(id);
  }
}

export default CuponCodePresenter;
