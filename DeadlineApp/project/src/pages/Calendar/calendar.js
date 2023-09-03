import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import frLocale from "@fullcalendar/core/locales/fr";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddEvent } from "./AddEvent";
import { ModifyEvent } from "./ModifyEvent";
import "../../Css/calendar.css";

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
      objet: "This is a custom event description.",
      frequence: "m",
    },
    {
      title: "Custom Event 2",
      start: "2023-09-05",
      end: "2023-09-07",
      objet: "This is annother custom event description.",
      color: "red",
    },
    {
      title: "Weekly Recurring Event",
      start: "2023-09-06T10:00:00",
      end: "2023-09-06T12:00:00",
      daysOfWeek: [0], // Tuesday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      recurring: {
        daysOfWeek: [1], // Recur on Tuesdays
        startRecur: "2023-09-06", // Start date for recurrence
        endRecur: "2023-12-31", // End date for recurrence
      },
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
      {showInputForm && <AddEvent hide={setInputForm} />}

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
        eventClassNames={"events"}
      />
      {console.log(selectedEvent)}
      {selectedEvent && <ModifyEvent hide={setSelectedEvent} />}
    </div>
  );
};
