import SessionPresenter from "../adapters/presenters/Session";
import TeacherPresenter from "../adapters/presenters/Teacher";
import CuponCodePresenter from "../adapters/presenters/CuponCode";
import IUseCases from "./interfaces/iUseCases";
const datos = (useCases: IUseCases) => {
  return {
    session: new SessionPresenter(useCases.session),
    teacher: new TeacherPresenter(useCases.teacher),
    cupon: new CuponCodePresenter(useCases.cupon),
  };
};

export default datos;
