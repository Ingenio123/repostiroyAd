import { IFlagDTO } from "../../dto/FlagDTO";
export interface IFlagUseCase {
  getFlags(): Promise<Array<IFlagDTO>>;
}
