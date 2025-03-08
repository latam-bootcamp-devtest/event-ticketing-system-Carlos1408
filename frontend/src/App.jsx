import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EventsList from "./pages/EventsList";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="events" />} />
        <Route path="events">
          <Route index element={<EventsList />} />
          <Route index path=":id" element={<EventDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
