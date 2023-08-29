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
  // Customize the content and style of day cells
  return <div className="days">{args.dayNumberText}</div>;
};

export const MyCalendar = () => {
  const [showInputForm, setInputForm] = useState(false);
  const [events, setEvents] = useState([
    {
      title: "Custom Event 1",
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
  const [event, setEvent] = useState({});
  const handelClick = (eventInfo) => {
    setEvent(eventInfo.event);
  };

  return (
    <div className="container" style={{ width: "99%" }}>
      <h1>hello</h1>
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
        // dayCellContent={dayCellContent}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        dayCellContent={dayCellContent}
        locale={frLocale}
        eventLimit={true} // Enable event limiting
        eventLimitText="more"
      />
      {console.log(FullCalendar)}
      <div style={{ position: "relative", left: "120%", bottom: "700px" }}>
        <h2>event details</h2>
        <p>event title:{event.title}</p>
      </div>
    </div>
  );
};
