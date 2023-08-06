import { Link } from "react-router-dom";
import { styled } from "styled-components";
import BG1X from '../assets/img/bg-wave-1x.jpg'
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

export const EventContainer = styled.div`

`;

export const BtnContainer = styled.div`
  padding-top: 40px;
  display: flex;
  gap: 24px;
  justify-content: flex-end;
`;

export const CreateLinkContainer = styled(Link)`
  width: 56px;
  height: 56px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #7b61ff;
  box-shadow: 2px 4px 9px 0px #a68dae47;
`;

export const FilterSortBtns = styled.button`
  width: 56px;
  height: 56px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffff;
  outline: none;
  border: none;
  box-shadow: 2px 4px 9px 0px #a68dae47;
`;
