export class LoginResponseModel {
  private _bloqueado: boolean;
  private _nome: string;
  private _podeAcessar: boolean;
  private _primeiroAcesso: number;
  private _token: string;

  constructor(init: Partial<LoginResponseModel>) {
    Object.assign(this, init);
  }

  get bloqueado(): boolean {
    return this._bloqueado;
  }

  set bloqueado(value: boolean) {
    this._bloqueado = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get podeAcessar(): boolean {
    return this._podeAcessar;
  }

  set podeAcessar(value: boolean) {
    this._podeAcessar = value;
  }

  get primeiroAcesso(): number {
    return this._primeiroAcesso;
  }

  set primeiroAcesso(value: number) {
    this._primeiroAcesso = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
