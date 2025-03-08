import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import eventService from "../services/event.service";

export default function EventCard({
  event,
  admin = false,
  handleDelete = (id) => {},
}) {
  const navigate = useNavigate();
  const id = event.id ?? event.eventId;
  const footer = (
    <div className="flex justify-content-around">
      <Button
        label="Edit"
        severity="info"
        onClick={() => {
          console.log(id);
        }}
      />
      <Button
        label="Delete"
        severity="danger"
        onClick={() => {
          console.log(id);
          eventService.deleteById(id);
        }}
      />
    </div>
  );
  return (
    <Card
      footer={admin ? footer : null}
      className={`m-4 ${admin ? "" : "cursor-pointer"}`}
      onClick={() => {
        if (!admin) navigate(`/events/${id}`);
      }}
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
