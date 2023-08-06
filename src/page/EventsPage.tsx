import { FC } from "react";
import CreateIcon from "../assets/svg/create.svg"
import SortIcon from '../assets/svg/sort.svg'
import FilterIcon from "../assets/svg/filter.svg";
import { BtnContainer, CreateLinkContainer, FilterSortBtns, Main } from "./EventsPage.styled";
import { Container } from "../components/Container";

export const EventsPage: FC = () => {
  return (
    <Main>
      <Container>
        <BtnContainer>
          <FilterSortBtns type="button">
            <svg width={16} height={16}>
              <image href={FilterIcon} width={16} height={16} />
            </svg>
          </FilterSortBtns>
          <FilterSortBtns type="button">
            <svg width={16} height={16}>
              <image href={SortIcon} width={16} height={16} />
            </svg>
          </FilterSortBtns>
          <CreateLinkContainer to={"/create"}>
            <svg width={16} height={16}>
              <image href={CreateIcon} width={16} height={16} />
            </svg>
          </CreateLinkContainer>
        </BtnContainer>
      </Container>
    </Main>
  );
};
