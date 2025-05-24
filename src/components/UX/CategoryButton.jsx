import React from "react"
import { ButtonProduct } from "../Home/Card/Card.styled"
import { CategoryIcon } from "../Graphics/CategoryIcon"


export function CategoryButton({ type, title, isActive, onClick }) {
    return (
        <ButtonProduct className={isActive ? "active" : ""} data-type={type} onClick={onClick}>
            <CategoryIcon type={type} />
            <p>{title}</p>
        </ButtonProduct>
    )
}
