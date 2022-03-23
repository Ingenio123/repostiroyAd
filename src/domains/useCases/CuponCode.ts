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
}

export default CuponCode;
