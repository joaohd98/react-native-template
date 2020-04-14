import {MomentController} from "../../helpers/moment-controller";

export class SubjectDay {
  private _codigoRelacao: number;
  private _conteudo: object[];
  private _disciplina: string;
  private _horaInicio: MomentController;
  private _horaTermino: MomentController;
  private _horario: string;
  private _turma: string;

  constructor(init: Partial<SubjectDay>) {
    Object.assign(this, init);
  }

  get codigoRelacao(): number {
    return this._codigoRelacao;
  }

  set codigoRelacao(value: number) {
    this._codigoRelacao = value;
  }

  get conteudo(): object[] {
    return this._conteudo;
  }

  set conteudo(value: object[]) {
    this._conteudo = value;
  }

  get disciplina(): string {
    return this._disciplina;
  }

  set disciplina(value: string) {
    this._disciplina = value;
  }

  get horaInicio(): MomentController {
    return this._horaInicio;
  }

  set horaInicio(value: MomentController) {
    this._horaInicio = new MomentController(value, "HH:mm:sss");
  }

  get horaTermino(): MomentController {
    return this._horaTermino;
  }

  set horaTermino(value: MomentController) {
    this._horaTermino = new MomentController(value, "HH:mm:sss");
  }

  get horario(): string {
    return this._horario;
  }

  set horario(value: string) {
    this._horario = value;
  }

  get turma(): string {
    return this._turma;
  }

  set turma(value: string) {
    this._turma = value;
  }
}

export class SubjectsDayResponseModel {
  private _conteudos: object[];
  private _isFeriado: boolean;
  private _listaMateriasDia: SubjectDay[];

  constructor(init: Partial<SubjectsDayResponseModel>) {
    Object.assign(this, init);
  }

  get conteudos(): object[] {
    return this._conteudos;
  }

  set conteudos(value: object[]) {
    this._conteudos = value;
  }

  get isFeriado(): boolean {
    return this._isFeriado;
  }

  set isFeriado(value: boolean) {
    this._isFeriado = value;
  }

  get listaMateriasDia(): SubjectDay[] {
    return this._listaMateriasDia;
  }

  set listaMateriasDia(values: SubjectDay[]) {
    this._listaMateriasDia = values.map(value => new SubjectDay(value));
  }
}
