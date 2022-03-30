import { IFlagUseCase } from "./../../domains/useCases/interfaces/iFlag";
import { IFlagEnitiy } from "../../domains/aggregates/interfaces/iFlag";
import { IFlagPresenter } from "./interfaces/iFlag";

class FlagPresenter implements IFlagPresenter {
  constructor(private readonly useCases: IFlagUseCase) {}
  //
  async getFlags(): Promise<Array<IFlagEnitiy>> {
    return await this.useCases.getFlags();
  }
  //
}
export default FlagPresenter;
