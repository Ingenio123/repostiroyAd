import { ICuponEntity } from "../aggregates/interfaces/iCuponAggregate";
import { ICuponCode } from "./interfaces/iCuponCode";
import { ICuponCodeRepository } from "./repository-interfaces/iCuponCode";

class CuponCode implements ICuponCode {
  constructor(private readonly cuponRepo: ICuponCodeRepository) {}
  async getCupons(): Promise<Array<ICuponEntity>> {
    const cuponCodeDTOList = await this.cuponRepo.getCupons();
    console.log(cuponCodeDTOList);
    return cuponCodeDTOList.map((e) => {
      return e;
    });
  }
  //
  addCuponCode(
    codigo: string,
    discont: number,
    numero_usos: number,
    dateExpires: Date
  ): Promise<boolean> {
    return this.cuponRepo.addCuponCode(
      codigo,
      discont,
      numero_usos,
      dateExpires
    );
  }
  //
  deleteCupon(id: string): Promise<boolean> {
    return this.cuponRepo.delete(id);
  }
}

export default CuponCode;
