import { Card } from "primereact/card";
import { Image } from "primereact/image";

export default function EventCard({ event }) {
  return (
    <Card className="m-4 cursor-pointer" onClick={() => console.log(event.id)}>
      <div className="flex flex-column">
        <Image src={event.eventImage} alt="Image" width="250" />
        <div>Event: {event.name}</div>
        <div>Event: {event.date}</div>
        <div>Available seats: {event.availableSeats}</div>
      </div>
    </Card>
  );
}
