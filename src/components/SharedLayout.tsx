import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Container,
  Header,
  LangForm,
  LangSelect,
  Logo,
  LogoLangContainer,
  SearchForm,
  SearchImgContainer,
  SearchInput,
} from "./SharedLayout.styled";
// import { Container } from "./Container";
import { useForm } from "react-hook-form";
import SearchIcon from "../assets/svg/search.svg";

type ISearchInput = {
  query: string;
};

export const SharedLayout: FC = () => {
  const [language, setLanguage] = useState<string>("UK");
  const [query, setQuery] = useState<ISearchInput>();
  const { register, handleSubmit } = useForm<ISearchInput>();

  const onSubmit = (data: ISearchInput) => {
    console.log(data);
  };

  const onChange = (event: any) => {
    setLanguage(event.value);
    console.log(event.value);
  };

  const options = [
    { value: "UK", label: "UK" },
    { value: "UA", label: "UA" },
  ];

  return (
    <React.Fragment>
      <Header>
        <Container>
          <LogoLangContainer>
            <Logo to={"/"}>Event Planer</Logo>
            <LangForm>
              <LangSelect
                onChange={(e) => onChange(e)}
                options={options}
                defaultValue={{ value: "UK", label: "UK" }}
              />
            </LangForm>
          </LogoLangContainer>
          <SearchForm onSubmit={handleSubmit(onSubmit)}>
            <SearchInput
              {...register("query")}
              placeholder="Search by keywords"
            />
            <SearchImgContainer>
              <svg width={17} height={17}>
                <image href={SearchIcon} />
              </svg>
            </SearchImgContainer>
          </SearchForm>
        </Container>
      </Header>
      <Outlet />
    </React.Fragment>
  );
};
