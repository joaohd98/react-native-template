import React from "react";
import {HomeScreenSubjectsListStyles} from "./styles";
import {SpinnerLoading} from "../../../../../components/spinner-loading";
import {Colors} from "../../../../../theme/colors";
import {ServiceStatus} from "../../../../../services/model";
import {HomeScreenSubjectsListConst} from "./const";
import {SubjectsDayResponseModel} from "../../../../../services/subjects-day/response";
import {MomentController} from "../../../../../helpers/moment-controller";

interface Props {
  status: ServiceStatus;
  selectedDate: MomentController;
  subjectDay: SubjectsDayResponseModel;
  onTryAgain: () => void;
}

export class HomeScreenSubjectsList extends React.Component<Props> {
  getLoadingComponent = () => {
    const {LoadingContainer} = HomeScreenSubjectsListStyles;

    return (
      <LoadingContainer>
        <SpinnerLoading color={Colors.primary} width={100} height={100} />
      </LoadingContainer>
    );
  };

  getErrorComponent = () => {
    const {onTryAgain} = this.props;
    const {TryAgainView} = HomeScreenSubjectsListStyles;
    const {tryAgainText} = HomeScreenSubjectsListConst;

    return <TryAgainView message={tryAgainText} onPress={onTryAgain} />;
  };

  getListComponent = () => {
    const {
      SubjectView,
      SubjectHeaderView,
      SubjectHoursText,
      SubjectRoomText,
      SubjectNameText,
    } = HomeScreenSubjectsListStyles;

    return (
      <SubjectView>
        <SubjectHeaderView>
          <SubjectHoursText>16:45 - 17:30</SubjectHoursText>
          <SubjectRoomText>SALA 505</SubjectRoomText>
        </SubjectHeaderView>
        <SubjectNameText>Produção e Interpretação de Texto</SubjectNameText>
      </SubjectView>
    );
  };

  render = () => {
    const {status, selectedDate} = this.props;
    const {classAgenda, formattedDay} = HomeScreenSubjectsListConst;
    const {List, ListTitleText, ListDateView, ListDateText} = HomeScreenSubjectsListStyles;

    const getComponent = {
      [ServiceStatus.loading]: this.getLoadingComponent(),
      [ServiceStatus.exception]: this.getErrorComponent(),
      [ServiceStatus.noInternetConnection]: this.getErrorComponent(),
      [ServiceStatus.success]: this.getListComponent(),
    };

    return (
      <List>
        <ListTitleText>{classAgenda}</ListTitleText>
        <ListDateView>
          <ListDateText>{formattedDay(selectedDate)}</ListDateText>
        </ListDateView>
        {getComponent[status]}
      </List>
    );
  };
}
