import React from "react";
import {
  HomeBlock,
  HomeContainer,
  HomeContent,
  HomeTitle,
  SHome,
} from "./Home.styled";
import { Table } from "./Table/Table";
import { Card } from "./Card/Card";

export function Home() {
  return (
    <SHome>
      <HomeContainer>
        <HomeBlock>
          <HomeTitle>Мои расходы</HomeTitle>
          <HomeContent>
            <Table />
            <Card />
          </HomeContent>
        </HomeBlock>
      </HomeContainer>
    </SHome>
  );
}
