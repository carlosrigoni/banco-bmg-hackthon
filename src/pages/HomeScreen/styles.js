import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

export const Container = styled.View``;

export const HeaderBar = styled.View`
  flex-direction: row;
  padding-top: ${20 + Constants.statusBarHeight}px;
  padding-left: 2%;
  text-align: center;
  margin-bottom: 15px;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  padding-left: 3%;
  font-size: 20px;
  margin-top: -3px;
`;

export const InfosBar = styled(LinearGradient).attrs({
  colors: ["#FAA41B", "#F0861E"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex-direction: row;
  border-radius: 1px;
`;

export const InfosVerticalBar = styled.View`
  padding: 5%;
  padding-right: 22%;
`;

export const BalanceText = styled.Text`
  margin: 5px 0 2px 0;
  font-size: 14px;
  color: #fff;
`;

export const BalanceValue = styled.Text`
  color: #fff;
  font-size: 35px;
  margin-bottom: 5px;
`;

export const TextInfo = styled.Text`
  color: #fff;
  font-size: 11px;
  margin-bottom: 10px;
`;

export const PaginationButtonsBar = styled.View`
  flex-direction: row;
  padding: 2% 0 10px 0;
`;

export const PaginationButtonsOn = styled.TouchableOpacity`
  width: 7px;
  height: 7px;
  border-radius: 100px;
  background-color: #fff;
  margin: 2px;
`;

export const PaginationButtonsOff = styled.TouchableOpacity`
  width: 7px;
  height: 7px;
  border-radius: 100px;
  background-color: #fff;
  margin: 2px;
  opacity: 0.65;
`;

export const IconInfoBar = styled.TouchableOpacity`
  background-color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 100px;
  padding: 13px 0 0 10px;
  margin: 25px 0 5px 20px;
`;

export const IconInfoText = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
  margin-left: 10px;
`;

export const NavigationBar = styled.View`
  background-color: #fff;
  border-radius: 5px;
  margin-top: -13px;
  align-self: center;
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
`;

export const ButtonNavigationBar = styled.View``;

export const ButtonNavigationON = styled.TouchableOpacity``;

export const TextButtonNavigationON = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #f99a1c;
`;

export const Mark = styled.Text`
  background-color: #f99a1c;
  margin-left: -10px;
  margin-right: -10px;
  height: 3px;
  margin-top: 22px;
`;

export const ButtonNavigation = styled.TouchableOpacity``;

export const TextButtonNavigation = styled.Text`
  font-size: 14px;
  color: #a9abad;
`;

export const SubTextNavigation = styled.Text``;
