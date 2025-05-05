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
                    <ButtonProduct><img src="bag.svg" alt="bag"/><p>Еда</p></ButtonProduct>
                    <ButtonProduct><img src="car.svg" alt="car"/><p>Транспорт</p></ButtonProduct>
                    <ButtonProduct><img src="house.svg" alt="house"/><p>Жилье</p></ButtonProduct>
                    <ButtonProduct><img src="gameboy.svg" alt="gameboy"/><p>Развлечения</p></ButtonProduct>
                    <ButtonProduct><img src="teacher.svg" alt="teacher"/><p>Образование</p></ButtonProduct>
                    <ButtonProduct><img src="message-text.svg" alt="message-text"/><p>Другое</p></ButtonProduct>
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