import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { useNavigate } from "react-router-dom";

export default function EventCard({ event }) {
  const navigate = useNavigate();
  return (
    <Card
      className="m-4 cursor-pointer"
      onClick={() => navigate(`./${event.id}`)}
    >
      <div className="flex flex-column">
        <Image
          src="http://localhost:3000/concert.jpg"
          alt="Image"
          width="250"
        />
        <div>Event: {event.name}</div>
        <div>Event: {event.date}</div>
        <div>Available seats: {event.availableSeats}</div>
      </div>
    </Card>
  );
}
