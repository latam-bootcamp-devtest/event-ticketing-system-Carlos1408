import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EventsList from "./pages/EventsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="events" />} />
        <Route index path="events" element={<EventsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
