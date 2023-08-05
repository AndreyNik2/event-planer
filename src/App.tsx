import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { SharedLayout } from './components/SharedLayout';
import { EventsPage } from './page/EventsPage';
import { CreateEventPage } from './page/CreateEventPage';
import { EventInfoPage } from './page/EventInfoPage';
import { EditEventPage } from './page/EditEventPage';

function App() {
  return (
    <BrowserRouter basename="/event-planer">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<EventsPage />} />
          <Route path="/create" element={<CreateEventPage />} />
          <Route path="/info/:id" element={<EventInfoPage />} />
          <Route path="/edit" element={<EditEventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
