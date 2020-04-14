import {MomentController} from "../../../../../helpers/moment-controller";

export const HomeScreenSubjectsListConst = {
  classAgenda: "AULAS E AGENDA",
  formattedDay: (data: MomentController) =>
    data.getFormattedValue(`DD [de] MMMM[, ${data.getDayOfWeekTodayYesterdayTomorrow()}]`),
  tryAgainText: "Ocorreu um erro ao carregar este aviso urgente.",
};
