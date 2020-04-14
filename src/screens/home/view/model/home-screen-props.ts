import {PropsGlobal} from "../../../../helpers/props-global";
import {MomentController} from "../../../../helpers/moment-controller";
import {ServiceStatus} from "../../../../services/model";

export interface HomeScreenProps extends PropsGlobal<"HomeScreen"> {
  name?: string;
  rmCpf?: string;
  subjects?: any;
  selectedDate?: MomentController;
  status: ServiceStatus;
  functions: {
    getSubjects: (rmCpf: string, date: MomentController) => void;
  };
}
