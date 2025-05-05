import { Cart, ColumnBox, ColumnBoxEl, ColumnDate, ColumnElements, ColumnPrice, ColumnProduct, ColumnSpace, ColumnTitle, Line, Redaction, Select, SelectElement, SelectName, SelectWrapper, STable, TableContent, TableItem, TableName, TableNav, TitleBox } from "./Table.styled";


export function Table() {
    return (
        <STable>
            <TableItem>
                <TableName>Таблица расходов</TableName>
                <TableNav>
                    <SelectWrapper>
                        <Select>
                            <SelectName>Фильтровать по категории</SelectName>
                            <SelectElement />
                        </Select>
                    </SelectWrapper>
                    <SelectWrapper>
                        <Select>
                            <SelectName>Сортировать по дате</SelectName>
                            <SelectElement />
                        </Select>
                    </SelectWrapper>
                </TableNav>
            </TableItem>
            <TitleBox>
                <ColumnTitle>Описание</ColumnTitle>
                <ColumnTitle>Категория</ColumnTitle>
                <ColumnTitle>Дата</ColumnTitle>
                <ColumnTitle>Сумма</ColumnTitle>
            </TitleBox>
            <Line/>
            <TableContent>
                <ColumnBox>
                    <ColumnSpace>Пятерочка</ColumnSpace>
                    <ColumnSpace>Яндекс Такси</ColumnSpace>
                    <ColumnSpace>Аптека Вита</ColumnSpace>
                    <ColumnSpace>Бургер Кинг</ColumnSpace>
                    <ColumnSpace>Деливери</ColumnSpace>
                    <ColumnSpace>Кофейня №1</ColumnSpace>
                    <ColumnSpace>Бильярд</ColumnSpace>
                    <ColumnSpace>Перекресток</ColumnSpace>
                    <ColumnSpace>Лукойл</ColumnSpace>
                    <ColumnSpace>Летуаль</ColumnSpace>
                    <ColumnSpace>Яндекс Такси</ColumnSpace>
                    <ColumnSpace>Перекресток</ColumnSpace>
                    <ColumnSpace>Деливери</ColumnSpace>
                    <ColumnSpace>Вкусвилл</ColumnSpace>
                    <ColumnSpace>Кофейня №1</ColumnSpace>
                    <ColumnSpace>Вкусвилл</ColumnSpace>
                    <ColumnSpace>Кофейня №1</ColumnSpace>
                </ColumnBox>

                <ColumnBox>
                    <ColumnProduct>Еда</ColumnProduct>
                    <ColumnProduct>Транспорт</ColumnProduct>
                    <ColumnProduct>Другое</ColumnProduct>
                    <ColumnProduct>Еда</ColumnProduct>
                    <ColumnProduct>Еда</ColumnProduct>
                    <ColumnProduct>Еда</ColumnProduct>
                    <ColumnProduct>Развлечения</ColumnProduct>
                    <ColumnProduct>Еда</ColumnProduct>
                    <ColumnProduct>Транспорт</ColumnProduct>
                    <ColumnProduct>Другое</ColumnProduct>
                    <ColumnProduct>Транспорт</ColumnProduct>
                    <ColumnProduct>Еда</ColumnProduct>
                    <ColumnProduct>Еда</ColumnProduct>
                    <ColumnProduct>Еда</ColumnProduct>
                    <ColumnProduct>Еда</ColumnProduct>
                    <ColumnProduct>Еда</ColumnProduct>
                    <ColumnProduct>Еда</ColumnProduct>
                </ColumnBox>

                <ColumnBox>
                    <ColumnDate>03.07.2024</ColumnDate>
                    <ColumnDate>03.07.2024</ColumnDate>
                    <ColumnDate>03.07.2024</ColumnDate>
                    <ColumnDate>03.07.2024</ColumnDate>
                    <ColumnDate>02.07.2024</ColumnDate>
                    <ColumnDate>02.07.2024</ColumnDate>
                    <ColumnDate>29.06.2024</ColumnDate>
                    <ColumnDate>29.06.2024</ColumnDate>
                    <ColumnDate>29.06.2024</ColumnDate>
                    <ColumnDate>29.06.2024</ColumnDate>
                    <ColumnDate>28.06.2024</ColumnDate>
                    <ColumnDate>28.06.2024</ColumnDate>
                    <ColumnDate>28.06.2024</ColumnDate>
                    <ColumnDate>27.06.2024</ColumnDate>
                    <ColumnDate>27.06.2024</ColumnDate>
                    <ColumnDate>26.06.2024</ColumnDate>
                    <ColumnDate>26.06.2024</ColumnDate>
                </ColumnBox>

                <ColumnBox>
                    <ColumnPrice>3 500 ₽</ColumnPrice>
                    <ColumnPrice>730 ₽</ColumnPrice>
                    <ColumnPrice>1 200 ₽</ColumnPrice>
                    <ColumnPrice>950 ₽</ColumnPrice>
                    <ColumnPrice>1 320 ₽</ColumnPrice>
                    <ColumnPrice>400 ₽</ColumnPrice>
                    <ColumnPrice>600 ₽</ColumnPrice>
                    <ColumnPrice>2 360 ₽</ColumnPrice>
                    <ColumnPrice>1 000 ₽</ColumnPrice>
                    <ColumnPrice>4 300 ₽</ColumnPrice>
                    <ColumnPrice>320 ₽</ColumnPrice>
                    <ColumnPrice>1 360 ₽</ColumnPrice>
                    <ColumnPrice>2 320 ₽</ColumnPrice>
                    <ColumnPrice>1 220 ₽</ColumnPrice>
                    <ColumnPrice>920 ₽</ColumnPrice>
                    <ColumnPrice>840 ₽</ColumnPrice>
                    <ColumnPrice>920 ₽</ColumnPrice>
                </ColumnBox>
                <ColumnBoxEl>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                <ColumnElements>
                    <Redaction><a href="" target=""><img src="redaction.svg" alt="redaction"></img></a></Redaction>
                    <Cart><a href="" target=""><img src="cart.svg" alt="cart"></img></a></Cart>
                </ColumnElements>
                </ColumnBoxEl>
            </TableContent>
        </STable>
    )
};