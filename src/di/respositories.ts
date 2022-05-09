import SessionRepository from "../adapters/repositories/Session";
import TeacherRespository from "../adapters/repositories/Teacher";
import IInfrastructures from "./interfaces/iInfrastructure";
import IRepositories from "./interfaces/IRepositories";
import CuponCodeRepository from "../adapters/repositories/CuponCode";
import FlagRepository from "../adapters/repositories/Flag";
import ReviewsRepository from "../adapters/repositories/Reviews";
import PromoRepository from "../adapters/repositories/Promo";

const datos = (infrastructure: IInfrastructures): IRepositories => {
  return {
    session: new SessionRepository(infrastructure.http, infrastructure.storage),
    teacher: new TeacherRespository(infrastructure.http),
    cupon: new CuponCodeRepository(infrastructure.http),
    flag: new FlagRepository(infrastructure.http),
    reviews: new ReviewsRepository(infrastructure.http),
    promo: new PromoRepository(infrastructure.http),
    // board: new BoardRepository(infrastructure.http),
  };
};

export default datos;
