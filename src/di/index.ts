import IPresenters from "./interfaces/iPresenters";
import infrastructures from "./infrastructures";
import repositories from "./respositories";
import UseCases from "./useCases";
import presenters from "./presenters";

const cInfrastructures = infrastructures();
const cRepositorires = repositories(cInfrastructures);
const cUseCases = UseCases(cRepositorires);
const cPresenters = presenters(cUseCases);

export default {
  session: cPresenters.session,
  teacher: cPresenters.teacher,
  cupon: cPresenters.cupon,
  flag: cPresenters.flag,
} as IPresenters;
