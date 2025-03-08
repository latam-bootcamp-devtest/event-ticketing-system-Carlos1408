import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { useNavigate } from "react-router-dom";

export default function EventCard({ event }) {
  const navigate = useNavigate();
  return (
    <Card
      className="m-4 cursor-pointer"
      onClick={() => navigate(`/events/${event.id ?? event.eventId}`)}
    >
      <div className="flex flex-column gap-3">
        <Image src={event.eventImage} alt="Image" width="250" />
        <div>Event: {event.name}</div>
        <div>Event: {event.date}</div>
        {event.availableSeats ? (
          <div>Available seats: {event.availableSeats}</div>
        ) : (
          <div>Ticket quantity: {event.ticketQuantity}</div>
        )}
      </div>
    </Card>
  );
}
