import { Link } from "react-router-dom";
import { styled } from "styled-components";
import BG1X from "../assets/img/bg-wave-1x.jpg";
import BG2X from "../assets/img/bg-wave-2x.jpg";

export const Main = styled.main`
  display: block;
  min-height: calc(100vh - 170px);
  background-size: cover;
  background-repeat: repeat-y;
  background-image: url(${BG1X});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BG2X});
  }
`;


export const GoBackButton = styled.button`
  color: #7b61ff;
  margin-top: 42px;
  background-color: transparent;
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
margin-top: 30px;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
`;

export const FormContainer = styled.form`
  height: 272px;
  min-height: 1000px;
  border-radius: 8px;
  background-color: #ffffff;

`
