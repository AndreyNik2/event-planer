import { FC } from "react";
import {
  GoBackButton,
  Main,
  Title,
  FormContainer,
  Label,
  TextIInput,
  TextArea,
  CustomSelect,
  DatePicker,
  SubmitButton,
  Form,
} from "./CreateEventPage.styled";
import { useNavigate } from "react-router-dom";
import LeftIcon from "../assets/svg/left.svg";
import { Container } from "../components/Container";
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { categoryList } from "./EventsPage";
import Event8 from "../assets/img/event8-1x.jpg";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addEvents } from "../redux/eventsSlice";
import { nanoid } from "nanoid";

type FormValues = {
  title: string;
  description: string;
  selectDate: Date;
  selectTime: string;
  location: string;
  category: { value: string; label: string };
  addPictures: string;
  priority: { value: string; label: string };
};

export const CreateEventPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleSubmit, register, reset, control } = useForm<FormValues>();

  const onSubmit = ({
    title,
    description,
    selectDate,
    selectTime,
    location,
    category,
    addPictures = Event8,
    priority,
  }: FormValues) => {
    try {
      dispatch(
        addEvents({
          id: nanoid(5),
          name: title,
          date: `${selectDate.getDate().toString().padStart(2, "0")}/${(
            selectDate.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}/${selectDate.getFullYear()}`,
          time: selectTime,
          description: description,
          url: addPictures,
          tag: category.value,
          city: location,
          priority: { name: priority.label, number: Number(priority.value) },
        })
      );
      reset();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <Container>
        <GoBackButton onClick={() => navigate(-1)}>
          <svg width={16} height={16}>
            <image href={LeftIcon} width={16} height={16} />
          </svg>
          go back
        </GoBackButton>
        <Title>Create new event</Title>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>Title</Label>
            <TextIInput required autoComplete="off" {...register("title")} />
            <Label>Description </Label>
            <TextArea required {...register("description")} />
            <Label>Select date</Label>
            <Controller
              control={control}
              name="selectDate"
              render={({ field: { value, ...fieldProps } }) => {
                return (
                  <DatePicker
                    {...fieldProps}
                    className="input"
                    placeholderText="Select date"
                    selected={value}
                    required
                  />
                );
              }}
            />
            <Label>Select time</Label>
            <TextIInput
              required
              autoComplete="off"
              {...register("selectTime")}
            />

            <Label>Location</Label>
            <TextIInput required autoComplete="off" {...register("location")} />
            <Label>Add picture</Label>
            <TextIInput
              required
              autoComplete="off"
              {...register("addPictures")}
              disabled
            />
            <Label>Category</Label>
            <Controller
              render={({ field }) => (
                <CustomSelect
                  required
                  {...field}
                  options={categoryList.map((category) => {
                    return { value: category, label: category };
                  })}
                  isClearable
                />
              )}
              name="category"
              control={control}
            />
            <Label>Priority</Label>
            <Controller
              render={({ field }) => (
                <CustomSelect
                  required
                  {...field}
                  options={[
                    { value: "1", label: "Low" },
                    { value: "1", label: "Medium" },
                    { value: "1", label: "High" },
                  ]}
                  isClearable
                />
              )}
              name="priority"
              control={control}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </FormContainer>
      </Container>
    </Main>
  );
};
