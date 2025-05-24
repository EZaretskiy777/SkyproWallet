import React from "react";
import {
  ButtonNewContent,
  CardBox,
  CardContainer,
  CardTitle,
  InputDate,
  InputPrice,
  InputSpace,
  ProductBox,
  SCard,
} from "./Card.styled";
import { CategoryButton } from "../../UX/CategoryButton";

export function Card() {
  return (
    <SCard>
      <CardContainer>
        <CardTitle>Новый расход</CardTitle>

        <CardBox>
          Описание
          <InputSpace placeholder="Введите описание"></InputSpace>
        </CardBox>
        
        <CardBox>
          Категория
          <ProductBox>
            <CategoryButton type={"food"} title={"Еда"} />
            <CategoryButton type={"transport"} title={"Транспорт"} />
            <CategoryButton type={"housing"} title={"Жилье"} />
            <CategoryButton type={"joy"} title={"Развлечения"} />
            <CategoryButton type={"education"} title={"Образование"} />
            <CategoryButton type={"others"} title={"Другое"} />
          </ProductBox>
        </CardBox>

        <CardBox>
          Сумма
          <InputPrice placeholder="Введите сумму"></InputPrice>
        </CardBox>
        <CardBox>
          Дата
          <InputDate placeholder="Введите дату"></InputDate>
        </CardBox>

        <ButtonNewContent>
          <p>Добавить новый расход</p>
        </ButtonNewContent>
      </CardContainer>
    </SCard>
  );
}
