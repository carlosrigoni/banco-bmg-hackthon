import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Linking } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Group1 from "../../assets/group1.png";
import Group2 from "../../assets/group2.png";
import Group3 from "../../assets/group3.png";
import Group4 from "../../assets/group4.png";
import Group5 from "../../assets/group5.png";

import {
  Container,
  GroupsButtonsBar,
  GroupsButtonOn,
  GroupsButtonOnText,
  GroupsButtonOff,
  GroupsButtonOffText,
  GroupsBar,
  GroupBar,
  GroupsProfileImage,
  GroupText,
  GroupIcon,
  Mark,
  GroupBarHorizontal,
} from "./styles";

import Header from "../HomeScreen";

const InvestimentScreen = () => {
  const navigation = useNavigation();

  function navigateToStatics() {
    navigation.navigate("Statics");
  }

  return (
    <Container>
      <Header />

      <GroupsButtonsBar>
        <GroupsButtonOn>
          <GroupsButtonOnText>GRUPOS</GroupsButtonOnText>
        </GroupsButtonOn>

        <GroupsButtonOff>
          <GroupsButtonOffText>MEUS GRUPOS</GroupsButtonOffText>
        </GroupsButtonOff>
      </GroupsButtonsBar>

      <GroupsBar>
        <GroupBar>
          <GroupBarHorizontal onPress={navigateToStatics}>
            <GroupsProfileImage source={Group1} />
            <GroupText>Grupo AB</GroupText>
            <GroupIcon>
              <AntDesign name="right" size={20} color="#f58220" />
            </GroupIcon>
          </GroupBarHorizontal>
          <Mark />
        </GroupBar>

        <GroupBar>
          <GroupBarHorizontal onPress={navigateToStatics}>
            <GroupsProfileImage source={Group2} />
            <GroupText>Grupo RD</GroupText>
            <GroupIcon>
              <AntDesign name="right" size={20} color="#f58220" />
            </GroupIcon>
          </GroupBarHorizontal>
          <Mark />
        </GroupBar>

        <GroupBar>
          <GroupBarHorizontal onPress={navigateToStatics}>
            <GroupsProfileImage source={Group3} />
            <GroupText>Grupo CD</GroupText>
            <GroupIcon>
              <AntDesign name="right" size={20} color="#f58220" />
            </GroupIcon>
          </GroupBarHorizontal>
          <Mark />
        </GroupBar>

        <GroupBar>
          <GroupBarHorizontal onPress={navigateToStatics}>
            <GroupsProfileImage source={Group4} />
            <GroupText>Grupo GF</GroupText>
            <GroupIcon>
              <AntDesign name="right" size={20} color="#f58220" />
            </GroupIcon>
          </GroupBarHorizontal>
          <Mark />
        </GroupBar>

        <GroupBar>
          <GroupBarHorizontal onPress={navigateToStatics}>
            <GroupsProfileImage source={Group5} />
            <GroupText>Grupo BK</GroupText>
            <GroupIcon>
              <AntDesign name="right" size={20} color="#f58220" />
            </GroupIcon>
          </GroupBarHorizontal>
          <Mark />
        </GroupBar>
      </GroupsBar>
    </Container>
  );
};

export default InvestimentScreen;
