import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import frLocale from "@fullcalendar/core/locales/fr";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddEvent } from "./AddEvent";
import "../Css/calendar.css";

const dayCellContent = (args) => {
  return <div className="days">{args.dayNumberText}</div>;
};

export const MyCalendar = () => {
  const [showInputForm, setInputForm] = useState(false);
  const [events, setEvents] = useState([
    {
      title: "maintenance",
      start: "2023-09-01",
      end: "2023-09-02",
      description: "This is a custom event description.",
      image: "",
    },
    {
      title: "Custom Event 2",
      start: "2023-09-05",
      end: "2023-09-07",
      description: "This is annother custom event description.",
      color: "red",
    },
  ]);
  const [selectedEvent, setSelectedEvent] = useState(null); // Track the selected event
  const handelClick = (eventInfo) => {
    setSelectedEvent(eventInfo.event); // Set the selected event
  };

  return (
    <div className="container" style={{ width: "99%" }}>
      <br />
      <button
        onClick={() => {
          setInputForm(!showInputForm);
        }}
        className="btn btn-primary"
        id="add"
      >
        ajouter un échéance
      </button>
      {showInputForm && <AddEvent />}

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handelClick}
        height="600px"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        dayCellContent={dayCellContent}
        locale={frLocale}
      />

      {/* Display the event description */}
      {selectedEvent && (
        <div className="event-details">
          <h2>Event Details</h2>
          <p>Title: {selectedEvent.title}</p>
          <p>Description: {selectedEvent.extendedProps.description}</p>
        </div>
      )}
    </div>
  );
};
