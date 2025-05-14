import React from "react"
import { Cart, ColumnBox, ColumnDate, ColumnElements, ColumnPrice, ColumnProduct, ColumnSpace, Redaction, STableRow } from "../Table.styled"
import { format } from "date-fns";
import { categoryTypes } from "../../../../../enums";

export function TableRow({ description, category, date, sum }) {

    return (
        <STableRow>
            <ColumnBox>
                <ColumnSpace>{description}</ColumnSpace>
                <ColumnProduct>{categoryTypes[category]}</ColumnProduct>
                <ColumnDate>{format(date, "dd.MM.yyyy")}</ColumnDate>
                <ColumnPrice>{new Intl.NumberFormat("ru-RU").format(Number(sum))}</ColumnPrice>
                <ColumnElements>
                    <Redaction>
                        <a href="" target="">
                            <img src="redaction.svg" alt="redaction"></img>
                        </a>
                    </Redaction>
                    <Cart>
                        <a href="" target="">
                            <img src="cart.svg" alt="cart"></img>
                        </a>
                    </Cart>
                </ColumnElements>
            </ColumnBox>
        </STableRow>
    )
}

// {Math.round(Math.random() * 5)} было около Space