import {MomentController} from "../../helpers/moment-controller";

export class SubjectsDayRequestModel {
  private _rm: string;
  private _date: MomentController;

  constructor(init: Partial<SubjectsDayRequestModel>) {
    Object.assign(this, init);
  }

  get rm(): string {
    return this._rm;
  }

  set rm(value: string) {
    this._rm = value;
  }

  get date(): MomentController {
    return this._date;
  }

  set date(value: MomentController) {
    this._date = value;
  }

  getRequest() {
    return {
      rm: this.rm,
      data: this.date.getFormattedValue("DD/MM/YYYY"),
    };
  }
}
