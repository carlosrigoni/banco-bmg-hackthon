import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View``;

export const GroupsButtonsBar = styled.View`
  margin: 6%;
  background-color: #f58220;
  border: 2px;
  border-color: #f58220;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 40px 10px 40px;
`;

export const GroupsButtonOn = styled.TouchableOpacity``;

export const GroupsButtonOnText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const GroupsButtonOff = styled.TouchableOpacity``;

export const GroupsButtonOffText = styled.Text`
  color: #fff;
`;

export const GroupsBar = styled.View`
  margin-left: 8%;
  margin-right: 10%;
`;

export const GroupBar = styled.TouchableOpacity`
  margin-bottom: 4%;
`;

export const GroupBarHorizontal = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const GroupsProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 200px;
`;

export const GroupText = styled.Text`
  padding-left: 4%;
  font-size: 16px;
  color: #f58220;
  font-weight: bold;
`;

export const GroupIcon = styled.View`
  padding-left: 60%;
`;

export const Mark = styled.View`
  margin-top: 2%;
  height: 1px;
  width: 100%;
  background-color: #e5e5e5;
`;
