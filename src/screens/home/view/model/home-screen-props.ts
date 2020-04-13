import {PropsGlobal} from "../../../../helpers/props-global";
import {MomentController} from "../../../../helpers/moment-controller";
import {ServiceStatus} from "../../../../services/model";

export interface HomeScreenProps extends PropsGlobal<"HomeScreen"> {
  name?: string;
  subjects?: any;
  selectedDate?: MomentController;
  status: ServiceStatus;
}
