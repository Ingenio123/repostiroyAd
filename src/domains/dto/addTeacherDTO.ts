export interface IAddParams {
  firstName: string;
  lastName: string;
  eslogan: string;
  description: string;
  interests: string;
  profesionalBackround: string;
}

export interface IAddtDTO {
  name: string;
  LastName: string;
  eslogan: string;
  description: string;
  interests: string;
  profBackground: string;
}

class TeacherDTO implements IAddtDTO {
  readonly name: string;
  readonly LastName: string;
  readonly eslogan: string;
  readonly description: string;
  readonly interests: string;
  readonly profBackground: string;

  constructor(params: IAddParams) {
    this.name = params.firstName;
    this.LastName = params.lastName;
    this.eslogan = params.eslogan;
    this.description = params.description;
    this.interests = params.interests;
    this.profBackground = params.profesionalBackround;
  }
}

export default TeacherDTO;
