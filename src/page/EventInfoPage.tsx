import { FC } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { Container } from "../components/SharedLayout.styled";
import {
  Main,
  ButtonContainer,
  DeleteButton,
  EditButton,
  EventDescription,
  EventDescriptionContainer,
  EventImage,
  EventImageWrapper,
  EventInfoContainer,
  EventItem,
  EventTitle,
  GoBackButton,
  Tag,
  TagContainer,
  TagsContainer,
  Title,
} from "./EventInfoPage.styled";
import LeftIcon from "../assets/svg/left.svg";
import { colorPicker } from "./EventsPage";
import { removeEvent } from "../redux/eventsSlice";

export const EventInfoPage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const events = useAppSelector((state) => state.eventsReducer.list);
  const event = events.filter((item) => item.id === id);

  return (
    <Main>
      <Container>
        <GoBackButton onClick={() => navigate(-1)}>
          <svg width={16} height={16}>
            <image href={LeftIcon} width={16} height={16} />
          </svg>
          go back
        </GoBackButton>
        <Title>{event[0].name}</Title>
        <EventItem>
          <EventImageWrapper>
            <EventImage src={event[0].url} alt={event[0].name} />
          </EventImageWrapper>
          <EventInfoContainer>
            <EventTitle>{event[0].name}</EventTitle>
            <EventDescriptionContainer>
              <EventDescription>{event[0].description}</EventDescription>
            </EventDescriptionContainer>
          </EventInfoContainer>
          <TagsContainer>
            <TagContainer>
              <Tag style={colorPicker(event[0].tag)}>{event[0].tag}</Tag>
            </TagContainer>
            <TagContainer>
              <Tag style={colorPicker(event[0].priority.name)}>
                {event[0].priority.name}
              </Tag>
            </TagContainer>
            <TagContainer>
              <Tag style={colorPicker(event[0].tag)}>
                {event[0].date.slice(0, 2)}.{event[0].date.slice(3, 5)} at
                {event[0].time}
              </Tag>
            </TagContainer>
            <TagContainer>
              <Tag style={colorPicker(event[0].tag)}>{event[0].city}</Tag>
            </TagContainer>
          </TagsContainer>
          <ButtonContainer>
            <EditButton
              onClick={() => {
                navigate(`/edit/${id}`);
              }}
              type="button"
            >
              Edit
            </EditButton>
            {id && (
              <DeleteButton
                onClick={() => {
                  dispatch(removeEvent(id));
                  navigate("/");
                }}
                type="button"
              >
                Delete Event
              </DeleteButton>
            )}
          </ButtonContainer>
        </EventItem>
      </Container>
    </Main>
  );
};
