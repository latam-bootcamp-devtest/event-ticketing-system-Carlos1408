import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import eventService from "../services/event.service";
import { useFormik } from "formik";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const getData = () => {
    eventService.getById(id).then((data) => setEvent(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const footer = (
    <div className="p-2">
      <Button label="Book Ticket" />
    </div>
  );

  return event ? (
    <div className="m-8 grid gap-4">
      <Card className="col-3">
        <Image
          src="http://localhost:3000/concert.jpg"
          alt="Image"
          width="250"
        />
      </Card>
      <Card footer={footer} className="col" title={event.name}>
        <div className="flex flex-column">
          <div className="w-full">
            <p>Date: {event.date}</p>
          </div>
          <div className="w-full">
            <h3>Event description: {event.description}</h3>
          </div>
          <div className="w-full">
            <p>Ticket price: {event.ticketPrice} $</p>
          </div>
          <div className="w-full">
            <p>Available seats: {event.availableSeats}</p>
          </div>
        </div>
      </Card>
    </div>
  ) : null;
}
