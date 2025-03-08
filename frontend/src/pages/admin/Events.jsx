import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard";
import eventService from "../../services/event.service";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    eventService.getAll().then((data) => setEvents(data));
  };

  const handleDelete = (id) => {
    eventService.deleteById(id).then();
    getData();
  };
  const handleEdit = () => {};

  return (
    <div className="p-4">
      <h1>All events</h1>
      <div className="flex flex-wrap">
        {events
          ? events.map((event) => {
              return (
                <EventCard
                  admin={true}
                  key={event.id}
                  event={event}
                  handleDelete={handleDelete}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
