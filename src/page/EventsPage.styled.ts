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

export const Title = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const EventContainer = styled.div``;

export const RelativeBtnContainer = styled.div`
position: relative;
`

export const BtnContainer = styled.div`
  padding-top: 40px;
  display: flex;
  gap: 24px;
  justify-content: flex-end;
`;

export const FilterContainer = styled.div`
  position: absolute;
  z-index: 999;
  top:0;
  left:-10px;
  border-radius: 8px;
  background-color: #ffffff;
  width: 170px;
  overflow: hidden;
`;

export const SortContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: -95px;
  border-radius: 8px;
  background-color: #ffffff;
  width: 170px;
  overflow: hidden;
`;

export const FilterTitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin: 16px 24px;
`

export const FilterTitle = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #7b61ff;
`;



export const FilterList = styled.ul`

`

export const FilterItem = styled.li`
  display: block;
  width: 170px;
  height: 32px;
  border-top: 1px solid #aca7c3;
`;

export const FilterButtons = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: #aca7c3;
  background-color: transparent;
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
  text-decoration: none;
  outline: 0;
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
  &:hover {
    box-shadow: 2px 4px 9px 0px #333333;
  }
`;

export const EventsList = styled.ul`
  padding: 0;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 271px;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 326px 326px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 302px 302px 302px 302px;
  }
`;

export const EventLink = styled(Link)`
  text-decoration: none;
  outline: 0;
  color: #3f3f3f;
`;

export const EventItem = styled.li`
  list-style-type: none;
  position: relative;
  display: block;
  height: 480px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 4px 9px 0px #a68dae47;
`;

export const EventImageWrapper = styled.div``;

export const EventImage = styled.img`
  width: 330px;
  display: block;
`;

export const TagsContainer = styled.div`
  margin: 12px;
  position: absolute;
  top: 0;
  display: flex;
  gap: 12px;
`;

export const TagContainer = styled.div`
  padding: 10px 12px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const Tag = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 500;
  line-height: 0.7;
`;

export const HoverContainer = styled.div`
  height: 536px;
  padding-top: 296px;
  position: absolute;
  top: 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-65px);
  }
`;

export const DateContainer = styled.div`
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
  padding: 16px 18px;
  background-color: #ffffffcc;
`;

export const Date = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 400;
  line-height: 0.58;
  color: #7b61ff;
`;

export const City = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 400;
  line-height: 0.58;
  color: #7b61ff;
`;

export const EventInfoContainer = styled.div`
  padding: 16px 12px;
  background-color: #ffffff;
`;

export const EventTitle = styled.h2`
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  line-height: 0.67;
  color: #1c1b1f;
  margin-bottom: 16px;
`;

export const EventDescriptionContainer = styled.div`
  height: 60px;
  overflow: hidden;
  margin-bottom: 50px;
`;

export const EventDescription = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  color: #1c1b1f;
`;

export const MoreBtn = styled.button`
  display: block;
  margin-right: auto;
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  padding: 12px 24px;
  background-color: #7b61ff;
  color: #ffffff;
  border-radius: 10px;
`;
