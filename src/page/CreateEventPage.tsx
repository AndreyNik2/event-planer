import { FC } from "react";
import {
  GoBackButton,
  Main,
  Title,
  FormContainer,
} from "./CreateEventPage.styled";
import {  useNavigate } from "react-router-dom";
import LeftIcon from "../assets/svg/left.svg";
import { Container } from "../components/Container";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { categoryList } from "./EventsPage";
import Select from "react-select";
import Event8 from "../assets/img/event8-1x.jpg";

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
  const navigate = useNavigate();
  const { handleSubmit, register, reset, control } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Title
              <input {...register("title")} id="title" />
            </label>

            <label>
              Description
              <textarea {...register("description")} />
            </label>
            <label>Select date</label>
            <Controller
              control={control}
              name="selectDate"
              render={({ field: { value, ...fieldProps } }) => {
                return (
                  <ReactDatePicker
                    {...fieldProps}
                    className="input"
                    placeholderText="Select date"
                    selected={value}
                  />
                );
              }}
            />
            <label>
              Select time
              <input {...register("selectTime")} />
            </label>
            <label>
              Location
              <input {...register("location")} />
            </label>
            <Controller
              render={({ field }) => (
                <Select
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
            <label>
              Add picture
              <input {...register("location")} disabled defaultValue={Event8} />
            </label>
            <Controller
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "Low", label: "Low" },
                    { value: "Medium", label: "Medium" },
                    { value: "High", label: "High" },
                  ]}
                  isClearable
                />
              )}
              name="priority"
              control={control}
            />
            <button type="submit">Submit</button>
          </form>
        </FormContainer>
      </Container>
    </Main>
  );
};
