import React from "react";

import {
  Container,
  Statics,
  LiquidText,
  LiquidValue,
  InfosBar,
  InfosTitle,
  InfosValue1,
  InfosPorcent1,
  InfosValue2,
  InfosPorcent2,
  InfosValue3,
  InfosPorcent3,
  InfosValue4,
  InfosPorcent4,
  Mark,
  ValueAvaliableText,
  ValueAvaliableValue,
  Button,
  ButtonText,
  InfosFix,
} from "./styles";
import Header from "../HomeScreen";

import { Linking } from "react-native";

const StatisticsScreen = () => {
  function sendWhatsapp() {
    Linking.openURL("https://chat.whatsapp.com/GLjzKfbIfmELsT1LRRKCDu");
  }

  return (
    <Container>
      <Header />

      <Statics>
        <LiquidText>Valor líquido</LiquidText>
        <LiquidValue>R$ 5.300,00</LiquidValue>

        <InfosBar>
          <InfosFix>
            <InfosTitle>SELIC</InfosTitle>
            <InfosValue1>R$ 3.975,00</InfosValue1>
            <InfosPorcent1>75%</InfosPorcent1>
          </InfosFix>

          <Mark />
        </InfosBar>

        <InfosBar>
          <InfosFix>
            <InfosTitle>DI</InfosTitle>
            <InfosValue2>R$ 1.325,00</InfosValue2>
            <InfosPorcent2>25%</InfosPorcent2>
          </InfosFix>
          <Mark />
        </InfosBar>

        <InfosBar>
          <InfosFix>
            <InfosTitle>PRÉ</InfosTitle>
            <InfosValue3>R$ 0,00</InfosValue3>
            <InfosPorcent3>0%</InfosPorcent3>
          </InfosFix>
          <Mark />
        </InfosBar>

        <InfosBar>
          <InfosFix>
            <InfosTitle>IPCA</InfosTitle>
            <InfosValue4>R$ 0,00</InfosValue4>
            <InfosPorcent4>0%</InfosPorcent4>
          </InfosFix>
          <Mark />
        </InfosBar>

        <ValueAvaliableText>Saldo disponivel para investir</ValueAvaliableText>
        <ValueAvaliableValue>R$ 100,00</ValueAvaliableValue>

        <Button>
          <ButtonText onPress={sendWhatsapp}>Entrar no grupo</ButtonText>
        </Button>
      </Statics>
    </Container>
  );
};

export default StatisticsScreen;
