import React, { useState } from "react";
import {
  HomeBlock,
  HomeContainer,
  HomeContent,
  HomeTitle,
  SHome,
} from "./Home.styled";
import { Table } from "./Table/Table";
import { Card } from "./Card/Card";
import { CardTypeProvider } from "../../providers/CardTypeProvider";

export function Home() {
  const [currentRow, setCurrentRow] = useState(null);

  return (
    <SHome>
      <HomeContainer>
        <HomeBlock>
          <HomeTitle>Мои расходы</HomeTitle>
          <HomeContent>
            <CardTypeProvider>
              <Table currentRow={currentRow} setCurrentRow={setCurrentRow} />
              <Card currentRow={currentRow} />
            </CardTypeProvider>
          </HomeContent>
        </HomeBlock>
      </HomeContainer>
    </SHome>
  );
}
