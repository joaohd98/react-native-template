import moment from "moment/min/moment-with-locales";
import "moment/locale/pt-br";

export class MomentController {
  private readonly date: moment.Moment;

  constructor(_date: string | moment.Moment = moment(), format = "") {
    this.date = moment(_date, format).locale("pt-br");
  }

  getDateValue = () => this.date;

  getDayOfWeekTodayYesterdayTomorrow = () => {
    const diff = moment().diff(this.date, "days");
    const specialDays = {
      [0]: "Hoje",
      [1]: "Amanhã",
      [-1]: "Ontem",
    };

    return specialDays[diff] || this.date.format("dddd").split("-")[0];
  };

  getFormattedValue = (format: string) => this.date.format(format);
}
