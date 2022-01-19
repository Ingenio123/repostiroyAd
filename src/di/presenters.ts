import SessionPresenter from "../adapters/presenters/Session";
import TeacherPresenter from "../adapters/presenters/Teacher";
import IUseCases from "./interfaces/iUseCases";
export default (useCases: IUseCases) => {
  return {
    session: new SessionPresenter(useCases.session),
    teacher: new TeacherPresenter(useCases.teacher),
  };
};
