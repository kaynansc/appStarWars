import styled from 'styled-components/native';

export const ModalBackground = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: #00000040;
`;

export const ModalContainer = styled.View`
  background-color: #FFFFFF;
  max-height: 380px;
  width: 90%;
  border-radius: 10px;
  align-items: center;
`;

export const ModalText = styled.View`
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonPay = styled.View`
  height: 50px;
  width: 150px;
  align-items: center;
  justify-content: center;
  background-color: #74D391;
  border-radius: 10px;
  margin-top: 20px;
`;

export const ButtonLater = styled.View`
  height: 50px;
  width: 150px;
  align-items: center;
  justify-content: center;
  background-color: #FC6249;
  border-radius: 10px;
  margin-top: 20px;
`;
