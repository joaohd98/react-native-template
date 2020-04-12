import moment from "moment";

export class MomentController {
  private readonly date: moment.Moment;

  constructor(_date: string | moment.Moment = moment(), format = "") {
    this.date = moment(_date, format);
  }

  getDateValue = () => this.date;

  getFormattedValue = (format: string) => this.date.format(format);
}
