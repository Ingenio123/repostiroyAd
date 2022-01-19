import { ITeacherEntity, ITeacherData } from "./interfaces/iTeacher";

class Board implements ITeacherEntity {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _eslogan: string;
  private readonly _description: string;
  private readonly _interests: string;
  private readonly _profBackground: string;
  private readonly _imgUrl: string;

  constructor(params: ITeacherData) {
    this._id = params.id;
    this._name = params.name;
    this._eslogan = params.eslogan;
    this._description = params.description;
    this._interests = params.interests;
    this._profBackground = params.profBackground;
    this._imgUrl = params.imgUrl;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get eslogan() {
    return this._eslogan;
  }

  get description() {
    return this._description;
  }

  get interests() {
    return this._interests;
  }

  get profBackground() {
    return this._profBackground;
  }
  get imgUrl() {
    return this._imgUrl;
  }
}

export default Board;
