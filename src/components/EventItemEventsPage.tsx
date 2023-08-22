import { FC } from "react";
import {
  City,
  Date,
  DateContainer,
  EventDescription,
  EventDescriptionContainer,
  EventImage,
  EventImageWrapper,
  EventInfoContainer,
  EventItem,
  EventLink,
  EventTitle,
  HoverContainer,
  MoreBtn,
  Tag,
  TagContainer,
  TagsContainer,
} from "./EventItemEventsPage.styled";
import { IEvent } from "../models/IEvent";

type Prop = {
  event: IEvent;
};

export const EventItemEventsPage: FC<Prop> = ({ event }) => {
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

  const descriptionSlicer = (description: string) => {
    if (description.length < 140) {
      return description;
    } else {
      return `${description.slice(0, 140)}...`;
    }
  };

  return (
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
              {event.time}
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
  );
};
