import { IFlagRepository } from "./repository-interfaces/iFlag";
import { IFlagDTO } from "../dto/FlagDTO";
import { IFlagUseCase } from "./interfaces/iFlag";

class Flag implements IFlagUseCase {
  constructor(private readonly flagRepo: IFlagRepository) {}
  //
  async getFlags(): Promise<IFlagDTO[]> {
    const flagDTOList = await this.flagRepo.getFlags();
    return flagDTOList.map((e) => {
      return e;
    });
  }
  //
}

export default Flag;
