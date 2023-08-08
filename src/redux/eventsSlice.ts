import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEvent } from '../models/IEvent';
import { events } from '../service/fakeBase';

type EventsState = {
    list: IEvent[]
}

const initialState: EventsState = {
  list: events,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    removeEvent(state, action: PayloadAction<string>) {
      state.list = [...state.list.filter(item => item.id !== action.payload)]
    },
    addEvents(state, action: PayloadAction<IEvent>) {
      console.log(action.payload);
      state.list.push(action.payload);
    },
    editEvent(state, action: PayloadAction<IEvent>) {
      state.list = [...state.list.filter((item) => item.id !== action.payload.id), action.payload];
    }
  },
});

export const { removeEvent, addEvents, editEvent } = eventsSlice.actions;

export default eventsSlice.reducer;