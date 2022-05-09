import { IReviewRepository } from "./../../domains/useCases/repository-interfaces/iReview";
import { IFlagRepository } from "./../../domains/useCases/repository-interfaces/iFlag";
import { ISessionRepository } from "../../domains/useCases/repository-interfaces/iSession";
import { ITeacherRepository } from "../../domains/useCases/repository-interfaces/iTeacher";
import { ICuponCodeRepository } from "../../domains/useCases/repository-interfaces/iCuponCode";
import { IPromoRepository } from "../../domains/useCases/repository-interfaces/iPromo";

export default interface IRepositories {
  session: ISessionRepository;
  teacher: ITeacherRepository;
  cupon: ICuponCodeRepository;
  flag: IFlagRepository;
  reviews: IReviewRepository;
  promo: IPromoRepository;
}
