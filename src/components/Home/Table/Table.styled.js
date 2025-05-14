import styled from "styled-components"


export const STable = styled.div`
width: 789px;
height: 618px;
top: 180px;
left: 118px;
border-radius: 30px;
background: #FFFFFF;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const TableItem = styled.div`
display: flex;
justify-content: space-between;
padding-left: 32px;
padding-right: 32px;
padding-top: 34px;
padding-bottom: 30px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;  
`;

export const TableName = styled.h2`
font-family: Montserrat;
font-weight: 700;
font-size: 24px;
margin: 0;
width: 238px;
height: 29px;
`;

export const TableNav = styled.div`
display: flex;
flex-direction: row;
gap: 24px;
align-items: center;
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Select = styled.div`
display: flex;
flex-direction: row;
`;

export const SelectName = styled.p`
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
margin: 0px;
`;

export const SelectElement = styled.select`
border: 0px;
padding: 0px;
`;

export const TitleBox = styled.div`
display: flex;
flex-direction: row;
gap: 32px;
padding-left: 32px;
padding-bottom: 7px;
`;

export const ColumnTitleS = styled.p`
color: #999999;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
margin: 0px;
width: 141px;
height: 15px;
`;
export const ColumnTitleC = styled.p`
color: #999999;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
margin: 0px;
width: 141px;
height: 15px;
`;
export const ColumnTitleD = styled.p`
color: #999999;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
margin: 0px;
width: 142px;
height: 15px;
`;
export const ColumnTitleP = styled.p`
color: #999999;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
margin: 0px;
width: 134px;
height: 15px;
`;

export const Line = styled.hr`
width: 789;
top: 114px;
border-width: 0.5px;
color: #999999;
margin: 0px;
`;

export const Scroll = styled.div`
width: 789px;
height: 479px;
overflow-y: scroll;
overflow-x: hidden;

&::-webkit-scrollbar {
    width: 6px;
}

&::-webkit-scrollbar-track {
    background: #FFFFFF;
}

&::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 30px;
}
`;

export const TableContent = styled.div`
display: flex;
flex-direction: column;
padding-top: 10px;
`;

export const ColumnBox = styled.div`
display: flex;
flex-direction: row;
gap: 32px;
align-items: center;
padding-right: 20px;
padding-left: 34px;
height: 28px;
&:hover {
  background: #DBFFE9;
}
&:hover p {
  color: #1FA46C;
}
&:hover img {
    content: url("cart-2.svg"); 
}
`;

export const ColumnSpace = styled.p`
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
color: #000000;
margin: 0px;
width: 141px;
height: 15px;
`;

export const ColumnProduct = styled.p`
    font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
color: #000000;
margin: 0px;
width: 141px;
height: 15px;
`;

export const ColumnDate = styled.p`
    font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
color: #000000;
margin: 0px;
width: 142px;
height: 15px;
`;

export const ColumnPrice = styled.p`
    font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
color: #000000;
margin: 0px;
width: 134px;
height: 15px;

&:after {
    content: "₽";
}
`;

export const STableRow = styled.div`
& div:nth-child(4) p::after {
    content: "₽";
}
`;


export const ColumnElements = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
`;

export const Redaction = styled.div`
img {
width: 12px;
height: 12px;
}
`;

export const Cart = styled.div`
img {
    width: 12px;
height: 12px;
}
`;