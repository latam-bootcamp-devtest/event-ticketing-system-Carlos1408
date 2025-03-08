import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import userService from "../services/user.service";

export default function PastEvents() {
  const [events, setEvents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    userService.getEvents(id).then((data) => setEvents(data));
  };

  return (
    <div className="p-4">
      <h1>Past events</h1>
      <div className="flex flex-wrap">
        {events
          ? events.map((event) => {
              return <EventCard key={event.id} event={event} />;
            })
          : null}
      </div>
    </div>
  );
}
