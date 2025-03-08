import React from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import BackButton from "../../components/BackButton";
import { Button } from "primereact/button";
import eventService from "../../services/event.service";

export default function EventsForm() {
  const navigate = useNavigate();
  const form = useFormik({
    initialValues: {
      name: "",
      date: "",
      availableSeats: 0,
      description: "",
      ticketPrice: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      eventService.create(values).then(() => navigate(".."));
    },
  });

  const footer = (
    <div className="flex justify-content-around">
      <Button label="Submit" type="submit" onClick={form.handleSubmit} />
      <Button
        label="Cancel"
        severity="secondary"
        type="reset"
        onClick={form.handleReset}
      />
    </div>
  );

  return (
    <div>
      <BackButton redirect={"/admin"} />
      <div className="flex justify-content-center">
        <Card footer={footer} title="Events form">
          <div className="field">
            <label htmlFor="name">Name</label>
            <InputText
              id="name"
              value={form.values.name}
              onChange={form.handleChange("name")}
              className="w-full"
            />
          </div>
          <div className="field">
            <label htmlFor="date">Date</label>
            <Calendar
              id="date"
              value={form.values.date}
              onChange={form.handleChange("date")}
              className="w-full"
            />
          </div>
          <div className="field">
            <label htmlFor="availableSeats">Available seats</label>
            <InputNumber
              id="availableSeats"
              showButtons
              min={0}
              value={form.values.availableSeats}
              onChange={(e) => form.setFieldValue("availableSeats", e.value)}
              className="w-full"
            />
          </div>
          <div className="field">
            <label htmlFor="description">Description</label>
            <InputText
              id="description"
              value={form.values.description}
              onChange={form.handleChange("description")}
              className="w-full"
            />
          </div>
          <div className="field">
            <label htmlFor="ticketPrice">Ticket Price</label>
            <InputNumber
              id="ticketPrice"
              min={0}
              maxFractionDigits={2}
              value={form.values.ticketPrice}
              onChange={(e) => form.setFieldValue("ticketPrice", e.value)}
              className="w-full"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
