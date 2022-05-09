import SessionPresenter from "../adapters/presenters/Session";
import TeacherPresenter from "../adapters/presenters/Teacher";
import CuponCodePresenter from "../adapters/presenters/CuponCode";
import IUseCases from "./interfaces/iUseCases";
import FlagPresenter from "../adapters/presenters/Flag";
import ReviewPresenter from "../adapters/presenters/Review";
import PromoPresenter from "../adapters/presenters/Promo";
const datos = (useCases: IUseCases) => {
  return {
    session: new SessionPresenter(useCases.session),
    teacher: new TeacherPresenter(useCases.teacher),
    cupon: new CuponCodePresenter(useCases.cupon),
    flag: new FlagPresenter(useCases.flag),
    reviews: new ReviewPresenter(useCases.reviews),
    promo: new PromoPresenter(useCases.promo),
  };
};

export default datos;
