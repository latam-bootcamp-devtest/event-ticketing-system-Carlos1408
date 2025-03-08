import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EventsList from "./pages/EventsList";
import EventDetails from "./pages/EventDetails";
import PastEvents from "./pages/PastEvents";
import Events from "./pages/admin/Events";
import EventsForm from "./pages/admin/EventsForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="events" />} />
        <Route path="events">
          <Route index element={<EventsList />} />
          <Route path=":id" element={<EventDetails />} />
        </Route>
        <Route path="admin">
          <Route index element={<Navigate to="events" />} />
          <Route path="events">
            <Route index element={<Events />} />
            <Route path="create" element={<EventsForm />} />
          </Route>
        </Route>
        <Route path="users">
          <Route path=":id/events" element={<PastEvents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
