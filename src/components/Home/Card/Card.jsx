import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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
import { categoryTypes } from "../../../lib/enums";
import { useTransactions } from "../../../providers/TransactionsProvider";
import { addTransactions } from "../../../services/api/transactions";
import { getUserToken, dateFormat } from "../../../utils/utils";
import { useCardType } from "../../../providers/CardTypeProvider";

export function Card({ currentRow }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentTransaction, setCurrentTransaction] = useState({});
  const { setTransactions, transactions } = useTransactions();
  const { cardType } = useCardType();

  useEffect(() => {
    if (cardType === "edit") {
      transactions.find((transaction) => {
        if (transaction._id === currentRow) {
          setCurrentTransaction(transaction);
          setSelectedCategory(transaction.category);
          return true;
        }
        return false;
      });
    } else {
      setCurrentTransaction({});
      setSelectedCategory(null);
    }
  }, [currentRow, cardType, transactions]);

  const { register, handleSubmit } = useForm();

  const selectCategoryHandler = (type) => {
    setSelectedCategory(type);
  };

  const onSubmit = (data) => {
    const newExpense = {
      description: data.description,
      category: selectedCategory,
      sum: parseFloat(data.sum),
      date: dateFormat(data.date),
    };

    addTransactions({ token: getUserToken(), transaction: newExpense })
      .then((response) => {
        console.log("Расход успешно добавлен:", response);
        setTransactions(response);
      })
      .catch((error) => {
        console.error("Ошибка при добавлении расхода:", error);
      });

    setSelectedCategory(null);
    document.querySelector("form").reset();
  };

  console.log("currentTransaction", currentTransaction);

  return (
    <SCard>
      <CardContainer onSubmit={handleSubmit(onSubmit)}>
        <CardTitle>
          {cardType === "new" ? "Новый расход" : "Редактирование"}
        </CardTitle>

        <CardBox>
          Описание
          <InputSpace
            type="text"
            placeholder="Введите описание"
            value={currentTransaction.description || ""}
            {...register("description", { required: "required" })}
          ></InputSpace>
        </CardBox>

        <CardBox>
          Категория
          <ProductBox>
            {Object.entries(categoryTypes).map(([type, title]) => (
              <CategoryButton
                key={type}
                type={type}
                title={title}
                onClick={() => selectCategoryHandler(type)}
                isActive={selectedCategory === type}
              />
            ))}
          </ProductBox>
        </CardBox>

        <CardBox>
          Дата
          <InputDate
            type="text"
            placeholder="Введите дату"
            value={currentTransaction.date || ""}
            {...register("date", { required: "required" })}
          ></InputDate>
        </CardBox>
        <CardBox>
          Сумма
          <InputPrice
            type="number"
            placeholder="Введите сумму"
            value={currentTransaction.sum || ""}
            {...register("sum", { required: "required" })}
          ></InputPrice>
        </CardBox>

        <ButtonNewContent type="submit">
          <p>
            {cardType === "new"
              ? "Добавить новый расход"
              : "Сохранить редактирование"}
          </p>
        </ButtonNewContent>
      </CardContainer>
    </SCard>
  );
}
