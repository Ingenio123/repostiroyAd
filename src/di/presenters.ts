import SessionPresenter from "../adapters/presenters/Session";
import TeacherPresenter from "../adapters/presenters/Teacher";
import CuponCodePresenter from "../adapters/presenters/CuponCode";
import IUseCases from "./interfaces/iUseCases";
import FlagPresenter from "../adapters/presenters/Flag";
const datos = (useCases: IUseCases) => {
  return {
    session: new SessionPresenter(useCases.session),
    teacher: new TeacherPresenter(useCases.teacher),
    cupon: new CuponCodePresenter(useCases.cupon),
    flag: new FlagPresenter(useCases.flag),
  };
};

export default datos;
