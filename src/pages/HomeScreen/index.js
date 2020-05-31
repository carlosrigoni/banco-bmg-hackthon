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
        <HeaderTitle>Cashback</HeaderTitle>
      </HeaderBar>

      <InfosBar>
        <InfosVerticalBar>
          <BalanceText>Saldo disponível</BalanceText>
          <BalanceValue>R$ 99,00</BalanceValue>
          <TextInfo>Valor já disponível na sua conta do cashback.</TextInfo>

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
          <ButtonNavigationON>
            <TextButtonNavigationON>Tudo</TextButtonNavigationON>
            <Mark />
          </ButtonNavigationON>
        </ButtonNavigationBar>

        <ButtonNavigationBar>
          <ButtonNavigation>
            <TextButtonNavigation>Crédito</TextButtonNavigation>
          </ButtonNavigation>
        </ButtonNavigationBar>

        <ButtonNavigationBar>
          <ButtonNavigation>
            <TextButtonNavigation>Débito</TextButtonNavigation>
          </ButtonNavigation>
        </ButtonNavigationBar>

        <ButtonNavigationBar>
          <ButtonNavigation>
            <TextButtonNavigation>Investir</TextButtonNavigation>
          </ButtonNavigation>
        </ButtonNavigationBar>
      </NavigationBar>
    </Container>
  );
};

export default HomeScreen;
