export class LoginRequestModel {
  private usuario: string;
  private senha: string;

  constructor(init: Partial<LoginRequestModel>) {
    Object.assign(this, init);
  }

  getRequest = () => ({
    Usuario: this.usuario,
    Senha: this.senha,
  });
}
