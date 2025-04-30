import styled from "styled-components";

export const SCard = styled.div`
width: 379px;
height: 618px;
border-radius: 30px;
background: #FFFFFF;
`;

export const CardContainer = styled.div`
padding: 32px;
display: flex;
flex-direction: column;
gap: 20px;
`;

export const CardTitle = styled.h2`
font-family: Montserrat;
font-weight: 700;
font-size: 24px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
margin: 0px;
`;

export const TitleSpace = styled.p`
font-family: Montserrat;
font-weight: 600;
font-size: 16px;
line-height: 100%;
letter-spacing: 0px;
margin: 0px;
`;

export const InputSpace = styled.input`
border-radius: 6px;
gap: 12px;
border-width: 0.5px;
padding: 12px;
border: 0.5px solid #999999;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;

&::placeholder {
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
color: #999999;
}
&:hover {
  background: #DBFFE9;
  color:rgb(0, 0, 0);
  border: 0.5px solid #1FA46C;
}
`;

export const TitleProduct = styled.p`
font-family: Montserrat;
font-weight: 600;
font-size: 16px;
line-height: 100%;
letter-spacing: 0px;
margin: 0px;
`;

export const ProductBox = styled.div`
display: flex;
flex-wrap: wrap;
gap: 6px;
`;

export const ButtonProduct = styled.button`
max-width: 152px;
height: 31px;
border-radius: 30px;
padding-top: 8px;
padding-right: 20px;
padding-bottom: 8px;
padding-left: 20px;
background: #F4F5F6;
border: 0px;
p {
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
margin: 0px;
}
img {
  width: 14px;
}
`;

export const TitleDate = styled.p`
font-family: Montserrat;
font-weight: 600;
font-size: 16px;
line-height: 100%;
letter-spacing: 0px;
margin: 0px;
`;

export const InputDate = styled.input`
border-radius: 6px;
gap: 12px;
border-width: 0.5px;
padding: 12px;
border: 0.5px solid #999999;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;

&::placeholder {
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
color: #999999;
}
&:hover {
  background: #DBFFE9;
  color:rgb(0, 0, 0);
  border: 0.5px solid #1FA46C;
}
`;

export const TitlePrice = styled.p`
font-family: Montserrat;
font-weight: 600;
font-size: 16px;
line-height: 100%;
letter-spacing: 0px;
margin: 0px;
`;

export const InputPrice = styled.input`
border-radius: 6px;
gap: 12px;
border-width: 0.5px;
padding: 12px;
border: 0.5px solid #999999;
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;

&::placeholder {
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
vertical-align: middle;
color: #999999;
}
&:hover {
  background: #DBFFE9;
  color:rgb(0, 0, 0);
  border: 0.5px solid #1FA46C;
}
`;

export const ButtonNewContent = styled.button`
width: 313px;
height: 39px;
border-radius: 6px;
gap: 12px;
padding: 12px;
background: #1FA46C;
border: 0px;

p {
font-family: Montserrat;
font-weight: 600;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
text-align: center;
color: #FFFFFF;
margin: 0px;
}
`;