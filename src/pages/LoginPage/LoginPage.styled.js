import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  //height: 600px;
  overflow: hidden;
  padding: 0 calc(50% - 600px) 0 calc(50% - 600px);
  background-color: #F1F1F1;
`;

export const BodyLogin = styled.body`
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
`;

//export const ContainerLogin = styled.div`
//  display: block;
////  width: 100vw;
//  min-height: 100vh;
//  margin: 0 auto;
//`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    background-color: #ffffff;
  }
`;

export const ModalBlock = styled.div`
max-width: 379px;
width: 100%;
padding: 20px 40px;
//height: 334px;
top: 233px;
left: 530px;
border-radius: 30px;
background: rgba(255, 255, 255, 1);
  //border: 0.7px solid #d4dbe5;
box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  @media screen and (max-width: 379px) {
    //max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export const ModalTtl = styled.div`
//gap: 10px;
font-family: Montserrat;
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: 0px;
text-align: center;
vertical-align: middle;
margin-top: 30px;
margin-bottom: 25px;
`;

export const ModalFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`;

export const ModalInput = styled.input`
  margin-top: 10px;
  background: transparent;
  width: 313px;
  height: 39px;
  border-radius: 6px;
  border: 0.5px solid rgba(153, 153, 153, 1);
  gap: 12px;
  //padding: 12px;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  outline: none;
  padding: 10px 8px;
  &:hover {
  background: #DBFFE9;
  color:rgb(0, 0, 0);
  border: 0.5px solid #1FA46C;
  background: rgba(219, 255, 233, 1);
}

  background-color: ${(props) =>
    props.$error ? " rgba(255, 235, 235, 1)" : "rgba(255, 255, 255, 1)"};
  
  border-color: ${(props) =>
    props.$error ? "rgba(242, 80, 80, 1)" : "border: 0.5px solid rgba(153, 153, 153, 1)"
  };
`;

export const ModalBtnEnter = styled.button`
  width: 313px;
  height: 39px;
  //background: rgba(31, 164, 108, 1);
  border-radius: 6px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  vertical-align: middle;
  color:rgba(255, 255, 255, 1);

  &:valid {
    background-color: rgba(31, 164, 108, 1); /* Цвет кнопки при корректном вводе */
    cursor: pointer;
  }

  @media screen and (max-width: 379px) {
    height: 40px;
  }
`;

export const ModalFormGroup = styled.div`
  text-align: center;
  margin-bottom: 5px;
`;

export const ModalFormGroupAP = styled(ModalFormGroup)`
font-family: Montserrat;
font-weight: 400;
font-size: 12px;
line-height: 150%;
letter-spacing: 0px;
text-align: center;
vertical-align: middle;
color: rgba(153, 153, 153, 1);
  //line-height: 150%;
  //letter-spacing: -0.14px;
`;

export const ModalFormGroupA = styled(ModalFormGroupAP)`
  text-decoration: underline;
`;

export const ErrorP = styled.p`
  width: 312px;
  height: 36px;
  margin-top: 7px;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  color:rgba(248, 77, 77, 1);
`;