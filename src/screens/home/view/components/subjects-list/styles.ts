import styled from "styled-components/native";
import {Fonts} from "../../../../../theme/fonts";
import {Colors} from "../../../../../theme/colors";
import {TryAgain} from "../../../../../components/try-again";

export const HomeScreenSubjectsListStyles = {
  List: styled.View`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 11px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding-horizontal: 16px;
    margin-horizontal: 16px;
  `,
  ListTitleText: styled.Text`
    font-family: ${Fonts.gotham.medium};
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.03px;
    text-transform: uppercase;
    color: ${Colors.primary};
    margin-vertical: 24px;
  `,
  ListDateView: styled.View`
    background: rgba(255, 255, 255, 0.07);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    padding-vertical: 18px;
    padding-horizontal: 16px;
    margin-bottom: 24px;
  `,
  ListDateText: styled.Text`
    font-family: ${Fonts.roboto.regular};
    font-size: 18px;
    line-height: 20px;
    align-items: center;
    letter-spacing: 0.01px;
    text-transform: lowercase;
    color: ${Colors.lightMedium};
  `,
  SubjectView: styled.View`
    margin: 8px 8px 30px 8px;
  `,
  SubjectHeaderView: styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
  `,
  SubjectHoursText: styled.Text`
    font-family: ${Fonts.metronicSlab.regular};
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    letter-spacing: 0.05px;
    text-transform: uppercase;
    color: ${Colors.lightBold};
    margin-right: 10px;
  `,
  SubjectRoomText: styled.Text`
    font-family: ${Fonts.metronicSlab.regular};
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.05px;
    text-transform: uppercase;
    color: ${Colors.lightBold};
    margin-left: 10px;
  `,
  SubjectNameText: styled.Text`
    font-family: ${Fonts.roboto.regular};
    font-size: 22px;
    line-height: 26px;
    color: ${Colors.lightRegular};
  `,
  LoadingContainer: styled.View`
    margin: 20px auto;
  `,
  TryAgainView: styled(TryAgain)`
    margin-top: 20px;
    margin-bottom: 50px;
  `,
};
