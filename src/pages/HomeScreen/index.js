import React from "react";

import { AntDesign, EvilIcons } from "@expo/vector-icons";

import {
  Container,
  HeaderBar,
  ButtonBack,
  HeaderTitle,
  InfosBar,
  InfosVerticalBar,
  BalanceText,
  BalanceValue,
  TextInfo,
  PaginationButtonsBar,
  PaginationButtonsOn,
  PaginationButtonsOff,
  IconInfoBar,
  IconInfoText,
  NavigationBar,
  ButtonNavigationBar,
  ButtonNavigation,
  TextButtonNavigation,
  SubTextNavigation,
  ButtonNavigationON,
  TextButtonNavigationON,
  Mark,
} from "./styles";

const HomeScreen = () => {
  return (
    <Container>
      <HeaderBar>
        <ButtonBack>
          <AntDesign name="arrowleft" size={24} color="#F37C1D" />
        </ButtonBack>
        <HeaderTitle>Investimentos</HeaderTitle>
      </HeaderBar>

      <InfosBar>
        <InfosVerticalBar>
          <BalanceText>Saldo disponível</BalanceText>
          <BalanceValue>R$ 99,00</BalanceValue>
          <TextInfo>Valor já disponível na sua conta.</TextInfo>

          <PaginationButtonsBar>
            <PaginationButtonsOn />
            <PaginationButtonsOff />
            <PaginationButtonsOff />
          </PaginationButtonsBar>
        </InfosVerticalBar>

        <InfosVerticalBar>
          <IconInfoBar>
            <EvilIcons name="cart" size={30} color="#F37C1D" />
          </IconInfoBar>
          <IconInfoText>MarketPlace</IconInfoText>
        </InfosVerticalBar>
      </InfosBar>

      <NavigationBar>
        <ButtonNavigationBar>
          <ButtonNavigation>
            <TextButtonNavigation>Tudo</TextButtonNavigation>
          </ButtonNavigation>
        </ButtonNavigationBar>

        <ButtonNavigationBar>
          <ButtonNavigation>
            <TextButtonNavigation>Poupança</TextButtonNavigation>
          </ButtonNavigation>
        </ButtonNavigationBar>

        <ButtonNavigationBar>
          <ButtonNavigation>
            <TextButtonNavigation>Fundos</TextButtonNavigation>
          </ButtonNavigation>
        </ButtonNavigationBar>

        <ButtonNavigationBar>
          <ButtonNavigation>
            <TextButtonNavigationON>Grupos</TextButtonNavigationON>
            <Mark />
          </ButtonNavigation>
        </ButtonNavigationBar>
      </NavigationBar>
    </Container>
  );
};

export default HomeScreen;
