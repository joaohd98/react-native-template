import React from "react";
import {HomeScreenSubjectsListStyles} from "./styles";
import {SpinnerLoading} from "../../../../../components/spinner-loading";
import {Colors} from "../../../../../theme/colors";
import {ServiceStatus} from "../../../../../services/model";
import {HomeScreenSubjectsListConst} from "./const";

interface Props {
  status: ServiceStatus;
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
    const {TryAgainView} = HomeScreenSubjectsListStyles;
    const {tryAgainText} = HomeScreenSubjectsListConst;

    return <TryAgainView message={tryAgainText} onPress={() => {}} />;
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
    const {List, ListTitleText, ListDateView, ListDateText} = HomeScreenSubjectsListStyles;

    return (
      <List>
        <ListTitleText>aulas e agenda</ListTitleText>
        <ListDateView>
          <ListDateText>05 de fevereiro, hoje</ListDateText>
        </ListDateView>
        {this.getErrorComponent()}
      </List>
    );
  };
}
