import { IFlagDTO } from "../../dto/FlagDTO";
export interface IFlagRepository {
  getFlags(): Promise<Array<IFlagDTO>>;
}
