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

export const EventItem = styled.div`
  margin-top: 40px;
  padding-bottom: 12px;
  list-style-type: none;
  position: relative;
  display: block;

  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 4px 9px 0px #a68dae47;
  @media (min-width: 768px) {
    width: 336px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
  }
`;

export const EventImageWrapper = styled.div``;

export const EventImage = styled.img`
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    justify-content:space-between;
  }
  @media (min-width: 1440px) {
  }
`;

export const TagContainer = styled.div`
  padding: 10px 12px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  @media (min-width: 768px) {
    margin-left: 12px;
    margin-right: 12px;
  }
  @media (min-width: 1440px) {
  }
`;

export const Tag = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 500;
  line-height: 0.7;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  padding: 8px 12px;
  min-width: 108px;
  height: 32px;
  background-color: #7b61ff;
  color: #ffffff;
  border-radius: 4px;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  padding: 8px 12px;
  min-width: 108px;
  height: 32px;
  color: #7b61ff;
  border: 1px solid #7b61ff;
  background-color: transparent;
  border-radius: 4px;
`;
