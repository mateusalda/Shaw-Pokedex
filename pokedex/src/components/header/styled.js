import styled from "styled-components";


export const ContainerHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #FFFF00;
  height: 70px;
`;

export const ContainerButtonLeft = styled.button`
  position: absolute;
  left: 15px;
  border-radius: 10px;
  border: 3px solid black;
  cursor: pointer;
`;

export const ContainerButtonRigth = styled.button`
  position: absolute;
  right: 15px;
  border-radius: 10px;
  border: 3px solid black;
  cursor: pointer;
`