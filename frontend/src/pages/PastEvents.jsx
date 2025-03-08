import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import userService from "../services/user.service";
import BackButton from "../components/BackButton";

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
      <div className="flex flex-row gap-4">
        <BackButton redirect={"/"} />
        <h1>Past events</h1>
      </div>
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
