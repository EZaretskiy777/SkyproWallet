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
  ErrorSpan,
  InputNameBlock,
  ErrorFieldSpan,
} from "./Card.styled";
import { CategoryButton } from "../../UX/CategoryButton";
import { categoryTypes } from "../../../lib/enums";
import { useTransactions } from "../../../providers/TransactionsProvider";
import {
  addTransactions,
  editTransactions,
} from "../../../services/api/transactions";
import { getUserToken, dateFormat, dateFormatRus } from "../../../utils/utils";
import { useCardType } from "../../../providers/CardTypeProvider";

export function Card({ currentRow, setCurrentRow }) {
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState({});
  const { setTransactions, transactions } = useTransactions();
  const { cardType, changeCardType } = useCardType();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    setWasSubmitted(false);
    if (cardType === "edit") {
      const transaction = transactions.find((t) => t._id === currentRow);
      if (transaction) {
        setCurrentTransaction(transaction);
        reset({
          description: transaction.description || "",
          date: dateFormatRus(transaction.date) || "",
          sum: transaction.sum || "",
          category: transaction.category || null,
        });
      }
    } else {
      setCurrentTransaction({});
      reset({
        description: "",
        date: "",
        sum: "",
        category: null,
      });
    }
  }, [currentRow, cardType, transactions]);

  const selectCategoryHandler = (type) => {
    setValue("category", type, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    setWasSubmitted(false);
    const newExpense = {
      description: data.description,
      category: data.category,
      sum: parseFloat(data.sum),
      date: dateFormat(data.date),
    };

    if (cardType === "new") {
      addTransactions({ token: getUserToken(), transaction: newExpense })
        .then((response) => {
          console.log("Расход успешно добавлен:", response);
          setTransactions(response);
        })
        .catch((error) => {
          console.error("Ошибка при добавлении расхода:", error);
        });
    } else {
      editTransactions({
        token: getUserToken(),
        transaction: newExpense,
        id: currentTransaction._id,
      })
        .then((response) => {
          console.log("Расход успешно изменён:", response);
          setTransactions(response);
          changeCardType("new");
        })
        .catch((error) => {
          console.error("Ошибка при изменении расхода:", error);
        });
    }

    setCurrentRow(null);
    reset({
      description: "",
      date: "",
      sum: "",
      category: null,
    });
  };

  const selectedCategory = watch("category");
  const selectedDate = watch("date");
  const selectedDescription = watch("description");
  const selectedSum = watch("sum");

  return (
    <SCard>
      <CardContainer onSubmit={handleSubmit(onSubmit)}>
        <CardTitle>
          {cardType === "new" ? "Новый расход" : "Редактирование"}
        </CardTitle>

        <CardBox>
          <InputNameBlock>
            Описание {errors.description && <ErrorSpan>*</ErrorSpan>}
          </InputNameBlock>

          <InputSpace
            type="text"
            placeholder="Введите описание"
            $status={
              errors.description
                ? "error"
                : selectedDescription
                ? "filled"
                : "initial"
            }
            defaultValue={currentTransaction.description || ""}
            {...register("description", {
              required: "Обязательное поле",
              minLength: {
                value: 4,
                message: "Минимум 4 символа",
              },
            })}
          ></InputSpace>
          {errors.description?.message &&
            errors.description?.message !== "Обязательное поле" && (
              <ErrorFieldSpan>{errors.description.message}</ErrorFieldSpan>
            )}
        </CardBox>

        <CardBox>
          <InputNameBlock>
            Категория {errors.category && <ErrorSpan>*</ErrorSpan>}
          </InputNameBlock>
          <ProductBox>
            <input
              type="hidden"
              {...register("category", { required: "required" })}
            />
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
          <InputNameBlock>
            Дата {errors.date && <ErrorSpan>*</ErrorSpan>}
          </InputNameBlock>
          <InputDate
            type="text"
            placeholder="Введите дату"
            defaultValue={dateFormatRus(currentTransaction.date) || ""}
            $status={
              errors.date ? "error" : selectedDate ? "filled" : "initial"
            }
            {...register("date", {
              required: "Обязательное поле",
              pattern: {
                value: /^\d{2}\.\d{2}\.\d{4}$/,
                message: "Формат даты: ДД.ММ.ГГГГ",
              },
            })}
          ></InputDate>
          {errors.date?.message &&
            errors.date?.message !== "Обязательное поле" && (
              <ErrorFieldSpan>{errors.date.message}</ErrorFieldSpan>
            )}
        </CardBox>
        <CardBox>
          <InputNameBlock>
            Сумма {errors.sum && <ErrorSpan>*</ErrorSpan>}
          </InputNameBlock>
          <InputPrice
            type="number"
            placeholder="Введите сумму"
            defaultValue={currentTransaction.sum || ""}
            $status={errors.sum ? "error" : selectedSum ? "filled" : "initial"}
            {...register("sum", { required: "Обязательное поле" })}
          ></InputPrice>
          {errors.sum?.message &&
            errors.sum?.message !== "Обязательное поле" && (
              <ErrorFieldSpan>{errors.sum.message}</ErrorFieldSpan>
            )}
        </CardBox>

        <ButtonNewContent
          type="submit"
          disabled={wasSubmitted && !isValid}
          onClick={() => {
            setWasSubmitted(true);
            trigger();
          }}
        >
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
