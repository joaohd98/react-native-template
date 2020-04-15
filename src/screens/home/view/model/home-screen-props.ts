import {PropsGlobal} from "../../../../helpers/props-global";
import {MomentController} from "../../../../helpers/moment-controller";
import {ServiceStatus} from "../../../../services/model";
import {SubjectsDayResponseModel} from "../../../../services/subjects-day/response";

export interface HomeScreenProps extends PropsGlobal<"HomeScreen"> {
  name?: string;
  rmCpf?: string;
  subjectDay?: SubjectsDayResponseModel;
  selectedDate?: MomentController;
  status: ServiceStatus;
  functions: {
    getSubjects: (rmCpf: string, date: MomentController) => void;
    logoutUser: (callback: () => void) => void;
  };
}
