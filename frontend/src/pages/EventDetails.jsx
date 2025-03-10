import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import eventService from "../services/event.service";
import ticketService from "../services/ticket.service";
import { useFormik } from "formik";
import BackButton from "../components/BackButton";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const refreshPage = () => {
    form.setValues(form.initialValues);
    eventService.getById(id).then((data) => {
      setEvent(data);
      form.setFieldValue("eventId", data.id);
    });
  };

  const form = useFormik({
    initialValues: {
      eventId: "",
      customerName: "",
      ticketQuantity: 1,
    },
    onSubmit: (values) => {
      values.eventId = event.id;
      console.log(values);
      ticketService.bookTicket(values).then((data) => {
        console.log(data);
        refreshPage();
        setShowForm(false);
      });
    },
  });

  useEffect(() => {
    refreshPage();
  }, []);

  const footer = (
    <div className="p-2">
      <Button
        label={showForm ? "Book Now!" : "Book Ticket"}
        onClick={() => {
          if (showForm) {
            form.handleSubmit();
          } else setShowForm(true);
        }}
      />
    </div>
  );

  return event ? (
    <div>
      <div className="flex flex-row gap-4">
        <BackButton />
        <h1>Event Details</h1>
      </div>
      <div className="m-8 grid gap-4">
        <Card className="col-3">
          <Image src={event.eventImage} alt="Image" width="250" />
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

            {showForm ? (
              <div>
                <div className="field">
                  <label htmlFor="customerName">Name</label>
                  <InputText
                    id="customerName"
                    value={form.values.customerName}
                    onChange={form.handleChange}
                    className="w-full"
                  />
                </div>
                <div className="field">
                  <label htmlFor="ticketQuantity">Total tickets</label>
                  <InputNumber
                    id="ticketQuantity"
                    showButtons
                    min={1}
                    max={event.availableSeats}
                    value={form.values.ticketQuantity}
                    onChange={(e) =>
                      form.setFieldValue("ticketQuantity", e.value)
                    }
                    className="w-full"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </Card>
      </div>
    </div>
  ) : null;
}
