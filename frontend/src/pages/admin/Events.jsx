import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard";
import eventService from "../../services/event.service";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

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
      <div className="flex justify-content-between">
        <h1>All events</h1>
        <Button label="Create event" onClick={() => navigate("./create")} />
      </div>

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
