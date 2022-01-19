export interface IUserParams {
  email: string;
  password: string;
}

export interface IUserDTO {
  readonly email: string;
  readonly password: string;
}

class UserDTO implements IUserDTO {
  readonly email: string;
  readonly password: string;

  constructor(param: IUserParams) {
    this.email = param.email;
    this.password = param.password;
  }
}

export default UserDTO;
