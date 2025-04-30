import { ButtonNewContent, ButtonProduct, CardContainer, CardTitle, InputDate, InputPrice, InputSpace, ProductBox, SCard, TitleDate, TitlePrice, TitleProduct, TitleSpace } from "./Card.styled";

export function Card() {
    return (
        <SCard>
            <CardContainer>
                <CardTitle>Новый расход</CardTitle>

                <TitleSpace>Описание</TitleSpace>
                <InputSpace placeholder="Введите описание"></InputSpace>

                <TitleProduct>Категория</TitleProduct>
                <ProductBox>
                    <ButtonProduct><img src="bag.png" alt="bag"/><p>Еда</p></ButtonProduct>
                    <ButtonProduct><p>Транспорт</p></ButtonProduct>
                    <ButtonProduct><p>Жилье</p></ButtonProduct>
                    <ButtonProduct><p>Развлечения</p></ButtonProduct>
                    <ButtonProduct><p>Образование</p></ButtonProduct>
                    <ButtonProduct><p>Другое</p></ButtonProduct>
                </ProductBox>

                <TitleDate>Дата</TitleDate>
                <InputDate placeholder="Введите дату"></InputDate>

                <TitlePrice>Сумма</TitlePrice>
                <InputPrice placeholder="Введите сумму"></InputPrice>

                <ButtonNewContent><p>Добавить новый расход</p></ButtonNewContent>
            </CardContainer>
        </SCard>
    )
};