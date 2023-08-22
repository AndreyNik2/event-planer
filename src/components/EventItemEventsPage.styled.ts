import { Link } from "react-router-dom";
import { styled } from "styled-components";

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

export const EventLink = styled(Link)`
  text-decoration: none;
  outline: 0;
  color: #3f3f3f;
`;

export const EventImageWrapper = styled.div``;

export const EventImage = styled.img`
  height: 336px;
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