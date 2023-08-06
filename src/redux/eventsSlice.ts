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
    removeEvents(state, _) {
      state.list = [];
    },
    addEvents(state, action: PayloadAction<IEvent>) {
        state.list.push(action.payload);
      }
    
  },
});

export const { removeEvents, addEvents } = eventsSlice.actions;

export default eventsSlice.reducer;