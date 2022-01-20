export interface ITeacherParams {
  _id: string;
  firstName: string;
  eslogan: string;
  description: string;
  Interests: string;
  profesionalBackround: string;
  imageUrl: string;
}

export interface ITeacherDTO {
  id?: string;
  name: string;
  eslogan: string;
  description: string;
  interests: string;
  profBackground: string;
  imgUrl?: string;
}

class TeacherDTO implements ITeacherDTO {
  readonly id: string;
  readonly name: string;
  readonly eslogan: string;
  readonly description: string;
  readonly interests: string;
  readonly profBackground: string;
  readonly imgUrl: string;

  constructor(params: ITeacherParams) {
    this.id = params._id;
    this.name = params.firstName;
    this.eslogan = params.eslogan;
    this.description = params.description;
    this.interests = params.Interests;
    this.profBackground = params.profesionalBackround;
    this.imgUrl = params.imageUrl;
  }
}

export default TeacherDTO;
