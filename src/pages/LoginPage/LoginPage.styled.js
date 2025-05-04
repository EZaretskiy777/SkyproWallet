import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
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
width: 379px;
height: 334px;
top: 233px;
left: 530px;
border-radius: 30px;
background: rgba(255, 255, 255, 1);
padding: 50px 60px;

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
width: 65;
height: 29;
//gap: 10px;
font-family: Montserrat;
font-weight: 700;
font-size: 24px;
line-height: 100%;
letter-spacing: 0px;
text-align: center;
vertical-align: middle;
margin-bottom: 20px;
`;

export const ModalFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalInput = styled.input`
width: 313px;
height: 39px;
border-radius: 6px;
//gap: 12px;
padding: 12px;
border-width: 0.5px;
padding: 12px;
margin-top: 12px;
border: 0.5px solid rgba(153, 153, 153, 1)
  
`;

export const ModalBtnEnter = styled.span`
width: 313px;
height: 39px;
border-radius: 6px;
//gap: 12px;
//padding: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  //letter-spacing: -0.14px;
  background: rgba(31, 164, 108, 1);


  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const ModalBtnEnterA = styled(ModalBtnEnter)`
font-family: Montserrat;
font-weight: 600;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
text-align: center;
vertical-align: middle;
color: rgba(255, 255, 255, 1);
`;

export const ModalFormGroup = styled.div`
  text-align: center;
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