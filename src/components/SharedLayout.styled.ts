import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Select from "react-select";

export const Header = styled.header`
  border-bottom: 1px solid #7b61ff;
 
  background-color: #fefcff;
`;

export const Container = styled.div`
  padding-top: 32px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  width: 272px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Logo = styled(Link)`
  outline: none;
  text-decoration: none;
  text-decoration: none;
  font-family: "Alata";
  font-size: 24px;
  font-weight: 400;
  line-height: 0.72;
  color: #7b61ff;
  &:visited {
    color: #7b61ff;
  }
`;

export const LogoLangContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LangForm = styled.form``;

export const LangSelect = styled(Select)`
  box-shadow: 2px 4px 9px 0px #a68dae47;
`;

export const SearchForm = styled.form`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchInput = styled.input`
  width: 230px;
  height: 48px;
  padding-left: 42px;
  border-radius: 10px;
  border: 1px solid #a68dae47;
  box-shadow: 2px 4px 9px 0px #a68dae47;
`;

export const SearchImgContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 12px;
`;
