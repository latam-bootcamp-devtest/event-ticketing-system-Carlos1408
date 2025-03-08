import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import eventService from "../services/event.service";

export default function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    eventService.getAll().then((data) => setEvents(data));
  };

  return (
    <div className="flex flex-wrap">
      {events
        ? events.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })
        : null}
    </div>
  );
}
