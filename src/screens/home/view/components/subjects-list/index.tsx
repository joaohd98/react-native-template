import React from "react";
import {HomeScreenSubjectsListStyles} from "./styles";
import {SpinnerLoading} from "../../../../../components/spinner-loading";
import {Colors} from "../../../../../theme/colors";

export class HomeScreenSubjectsList extends React.PureComponent {
  render = () => {
    const {
      List,
      ListTitleText,
      ListDateView,
      ListDateText,
      SubjectView,
      SubjectHeaderView,
      SubjectHoursText,
      SubjectRoomText,
      SubjectNameText,
    } = HomeScreenSubjectsListStyles;

    return (
      <List>
        <ListTitleText>aulas e agenda</ListTitleText>
        <ListDateView>
          <ListDateText>05 de fevereiro, hoje</ListDateText>
        </ListDateView>
        <SpinnerLoading color={Colors.primary} width={100} height={100} />
        <SubjectView>
          <SubjectHeaderView>
            <SubjectHoursText>16:45 - 17:30</SubjectHoursText>
            <SubjectRoomText>SALA 505</SubjectRoomText>
          </SubjectHeaderView>
          <SubjectNameText>Produção e Interpretação de Texto</SubjectNameText>
        </SubjectView>
      </List>
    );
  };
}
