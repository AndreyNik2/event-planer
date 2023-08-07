import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateIcon from "../assets/svg/create.svg";
import SortIcon from "../assets/svg/sort.svg";
import FilterIcon from "../assets/svg/filter.svg";
import UpIcon from "../assets/svg/up.svg";
import DownIcon from "../assets/svg/down.svg";
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
  RelativeBtnContainer,
  FilterList,
  FilterItem,
  FilterButtons,
  FilterContainer,
  FilterTitle,
  FilterTitleContainer,
  SortContainer,
} from "./EventsPage.styled";
import { Container } from "../components/Container";
import { useAppSelector } from "../hooks/reduxHooks";
import { IEvent } from "../models/IEvent";

  export const categoryList = [
    "Art",
    "Business",
    "Conference",
    "Workshop",
    "Party",
    "Shop",
  ];

  export const sortList = [
    { name: "by name", icon: UpIcon, tag: "nameUp" },
    { name: "by name", icon: DownIcon, tag: "nameDown" },
    { name: "by data", icon: UpIcon, tag: "dateUp" },
    { name: "by data", icon: DownIcon, tag: "dateDown" },
    { name: "by priority", icon: UpIcon, tag: "priorityUp" },
    { name: "by priority", icon: DownIcon, tag: "priorityDown" },
  ];

type ISettingsInput = {
  sort: string;
  category: string;
};

export const EventsPage: FC = () => {
  const events = useAppSelector((state) => state.eventsReducer.list);
  const [preparedEvents, setPreparedEvents] = useState<IEvent[] | null>(null);
  const [sort, setSort] = useState<string | null>(null);
  const [category, setCategoty] = useState<null | string>(null);
  const [togleSort, setTogleSort] = useState<boolean>(false);
  const [togleFilter, setTogleFilter] = useState<boolean>(false);



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

  useEffect(() => {
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
          console.log("priorityUp");
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
          console.log("priorityUp");
          return [...filtered].sort(
            (a, b) => a.priority.number - b.priority.number
          );
        }
        if (sort === "priorityDown") {
          console.log("priorityDown");
          return [...filtered].sort(
            (a, b) => b.priority.number - a.priority.number
          );
        }
      }
    };
    const sortedEv = prepareEvents(sort, category, events);
    if (sortedEv) {
      setPreparedEvents(sortedEv);
    }
  }, [sort, category, events]);

  return (
    <Main>
      <Title>Events</Title>
      <Container>
        <BtnContainer>
          <RelativeBtnContainer>
            <FilterSortBtns
              type="button"
              onClick={() => {
                setTogleFilter(!togleFilter);
                setTogleSort(false);
              }}
            >
              <svg width={16} height={16}>
                <image href={FilterIcon} width={16} height={16} />
              </svg>
            </FilterSortBtns>
            {togleFilter && (
              <FilterContainer>
                <FilterTitleContainer>
                  <FilterTitle>Category</FilterTitle>
                  <svg width={16} height={16}>
                    <image href={FilterIcon} width={16} height={16} />
                  </svg>
                </FilterTitleContainer>
                <FilterList>
                  {categoryList.map((category) => (
                    <FilterItem key={category}>
                      <FilterButtons
                        onClick={() => {
                          setCategoty(category);
                          setTogleFilter(!togleFilter);
                        }}
                      >
                        {category}
                      </FilterButtons>
                    </FilterItem>
                  ))}
                  <FilterItem>
                    <FilterButtons
                      onClick={() => {
                        setCategoty(null);
                        setTogleFilter(!togleFilter);
                      }}
                    >
                      Reset
                    </FilterButtons>
                  </FilterItem>
                </FilterList>
              </FilterContainer>
            )}
          </RelativeBtnContainer>
          <RelativeBtnContainer>
            <FilterSortBtns
              type="button"
              onClick={() => {
                setTogleSort(!togleSort);
                setTogleFilter(false);
              }}
            >
              <svg width={16} height={16}>
                <image href={SortIcon} width={16} height={16} />
              </svg>
            </FilterSortBtns>
            {togleSort && (
              <SortContainer>
                <FilterTitleContainer>
                  <FilterTitle>Sort by</FilterTitle>
                  <svg width={16} height={16}>
                    <image href={SortIcon} width={16} height={16} />
                  </svg>
                </FilterTitleContainer>
                <FilterList>
                  {sortList.map((item) => (
                    <FilterItem key={item.tag}>
                      <FilterButtons
                        onClick={() => {
                          setSort(item.tag);
                          setTogleSort(!togleSort);
                        }}
                      >
                        {item.name}
                        <svg width={12} height={12}>
                          <image href={item.icon} width={12} height={12} />
                        </svg>
                      </FilterButtons>
                    </FilterItem>
                  ))}
                </FilterList>
              </SortContainer>
            )}
          </RelativeBtnContainer>

          <CreateLinkContainer to={"/create"}>
            <svg width={16} height={16}>
              <image href={CreateIcon} width={16} height={16} />
            </svg>
          </CreateLinkContainer>
        </BtnContainer>
        {preparedEvents && (
          <EventsList>
            {preparedEvents.map((event) => (
              <EventItem key={event.id}>
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
