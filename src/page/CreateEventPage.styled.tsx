import { styled } from "styled-components";
import BG1X from "../assets/img/bg-wave-1x.jpg";
import BG2X from "../assets/img/bg-wave-2x.jpg";
import ReactDatePicker from "react-datepicker";
import Select from "react-select";

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
  margin-top: 24px;
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  @media (min-width: 768px) {
    text-align: center;
  }
  @media (min-width: 1440px) {
  }
`;

export const FormContainer = styled.div`
  padding: 16px;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  min-height: 1000px;
  border-radius: 8px;
  background-color: #ffffff;
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1440px) {
    
  }
`;

export const Form = styled.form`
`

export const Label = styled.label`
  margin-top: 24px;
  margin-bottom: 5px;
  display: block;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #7b61ff;
  
`;

export const TextIInput = styled.input`
  padding: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 32px;
  width: 220px;
  border-radius: 5px;
  border: 1px solid #aca7c3;
  outline: none;
  &:active {
    border-color: #7b61ff;
  }
  @media (min-width: 768px) {
    width: 680px;
  }
  @media (min-width: 1440px) {
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 132px;
  width: 220px;
  border-radius: 5px;
  border: 1px solid #aca7c3;
  resize: none;
  outline: none;
  &:active {
    border-color: #7b61ff;
  }
  @media (min-width: 768px) {
    width: 680px;
  }
  @media (min-width: 1440px) {
  }
`;

export const DatePicker = styled(ReactDatePicker)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  height: 52px;
  width: 220px;
  border-radius: 5px;
  border: 1px solid #aca7c3;
  outline: none;
  &:active {
    border-color: #7b61ff;
  }
  @media (min-width: 768px) {
    width: 680px;
  }
  @media (min-width: 1440px) {
  }
`;

export const CustomSelect = styled(Select)`
  width: 240px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  &:active {
    border-color: #7b61ff;
  }
  @media (min-width: 768px) {
    width: 680px;
  }
  @media (min-width: 1440px) {
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  height: 52px;
  width: 240px;
  border-radius: 5px;
  color: #ffffff;
  background-color: #7b61ff;
  &:hover,
  :focus {
    box-shadow: 2px 4px 9px 0px #a68dae47;
  }
`;
