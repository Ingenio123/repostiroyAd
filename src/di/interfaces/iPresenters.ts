import { IFlagPresenter } from "./../../adapters/presenters/interfaces/iFlag";
import { ICuponCodePresenter } from "../../adapters/presenters/interfaces/iCuponCode";
import { ISessionPresenter } from "../../adapters/presenters/interfaces/iSession";
// import { IBoardPresenter } from "@adapters/presenters/interfaces/iBoard";
import { ITeacherPresenter } from "../../adapters/presenters/interfaces/iTeacher";
export default interface IPresenters {
  session: ISessionPresenter;
  teacher: ITeacherPresenter;
  cupon: ICuponCodePresenter;
  flag: IFlagPresenter;
}
