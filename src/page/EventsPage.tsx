import { FC, useState } from "react";
import { Link } from "react-router-dom";
import CreateIcon from "../assets/svg/create.svg";
import SortIcon from "../assets/svg/sort.svg";
import FilterIcon from "../assets/svg/filter.svg";
import {
  BtnContainer,
  CreateLinkContainer,
  EventItem,
  EventsList,
  FilterSortBtns,
  Main,
  Title,
  EventImageWrapper,
  EventImage,
  EventTitle,
  EventDescription,
  EventLink,
  TagsContainer,
  TagContainer,
  Tag,
  DateContainer,
  Date,
  City,
  EventInfoContainer,
  HoverContainer,
  EventDescriptionContainer,
  MoreBtn,
} from "./EventsPage.styled";
import { Container } from "../components/Container";
import { useAppSelector } from "../hooks/reduxHooks";
import { IEvent } from "../models/IEvent";

export const EventsPage: FC = () => {
  const events = useAppSelector((state) => state.eventsReducer.list);
  const [sort, setSort] = useState<string | null>();
  const [category, setCategoty] = useState<null | string>();

  const prepareEvents = (
    sort: null | string,
    categoty: null | string,
    events: IEvent[]
  ) => {
    if (!category && !sort) {
      return events;
    }
    if (category && !sort && events.length > 0) {
      return events.filter((event) => event.tag === category);
    }
    if (!category && sort && events.length > 0) {
      if (sort === "nameUp") {
        return [...events].sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sort === "nameDown") {
        return [...events].sort((a, b) => b.name.localeCompare(a.name));
      }
      if (sort === "dateUp") {
        return [...events].sort((a, b) => a.date.localeCompare(b.date));
      }
      if (sort === "dateDown") {
        return [...events].sort((a, b) => b.date.localeCompare(a.date));
      }
      if (sort === "priorityUp") {
        return [...events].sort(
          (a, b) => a.priority.number - b.priority.number
        );
      }
      if (sort === "priorityDown") {
        return [...events].sort(
          (a, b) => b.priority.number - a.priority.number
        );
      }
    }
    if (category && sort && events.length > 0) {
      const filtered = events.filter((event) => event.tag === category);
      if (sort === "nameUp") {
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sort === "nameDown") {
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      }
      if (sort === "dateUp") {
        return [...filtered].sort((a, b) => a.date.localeCompare(b.date));
      }
      if (sort === "dateDown") {
        return [...filtered].sort((a, b) => b.date.localeCompare(a.date));
      }
      if (sort === "priorityUp") {
        return [...filtered].sort(
          (a, b) => a.priority.number - b.priority.number
        );
      }
      if (sort === "priorityDown") {
        return [...filtered].sort(
          (a, b) => b.priority.number - a.priority.number
        );
      }
    }
  };

  const descriptionSlicer = (description: string) => {
    if (description.length < 140) {
      return description;
    } else {
      return `${description.slice(0, 140)}...`;
    }
  };

  const colorPicker = (tag: string) => {
    if (tag === "Low") {
      return { color: "#6BD475" };
    }
    if (tag === "Medium") {
      return { color: "#E2A300" };
    }
    if (tag === "High") {
      return { color: "#FF2B77" };
    } else {
      return { color: "#7B61FF" };
    }
  };

  return (
    <Main>
      <Title>Events</Title>
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
        {events.length > 0 && (
          <EventsList>
            {events.map((event) => (
              <EventItem>
                <EventLink key={event.id} to={`/info/${event.id}`}>
                  <EventImageWrapper>
                    <EventImage src={event.url} alt={event.name} />
                  </EventImageWrapper>
                  <TagsContainer>
                    <TagContainer>
                      <Tag style={colorPicker(event.tag)}>{event.tag}</Tag>
                    </TagContainer>
                    <TagContainer>
                      <Tag style={colorPicker(event.priority.name)}>
                        {event.priority.name}
                      </Tag>
                    </TagContainer>
                  </TagsContainer>
                  <HoverContainer>
                    <DateContainer>
                      <Date>
                        {event.date.slice(0, 2)}.{event.date.slice(3, 5)} at
                        {event.date.slice(11, 13)}:{event.date.slice(14, 16)}
                      </Date>
                      <City>{event.city}</City>
                    </DateContainer>
                    <EventInfoContainer>
                      <EventTitle>{event.name}</EventTitle>
                      <EventDescriptionContainer>
                        <EventDescription>
                          {descriptionSlicer(event.description)}
                        </EventDescription>
                      </EventDescriptionContainer>
                      <MoreBtn>More info</MoreBtn>
                    </EventInfoContainer>
                  </HoverContainer>
                </EventLink>
              </EventItem>
            ))}
          </EventsList>
        )}
      </Container>
    </Main>
  );
};
