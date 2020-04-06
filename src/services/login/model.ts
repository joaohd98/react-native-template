export class LoginRequestModel {
  private _usuario: string;
  private _senha: string;

  constructor(init: Partial<LoginRequestModel>) {
    Object.assign(this, init);
  }

  getRequest = () => ({
    Usuario: this.usuario,
    Senha: this.senha,
  });

  get usuario(): string {
    return this._usuario;
  }

  set usuario(value: string) {
    this._usuario = value;
  }

  get senha(): string {
    return this._senha;
  }

  set senha(value: string) {
    this._senha = value;
  }
}

export class LoginResponseModel {}
