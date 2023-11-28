import "./Calendar.css";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState("");
  // const [meetingLink, setMeetingLink] = useState("");

  useEffect(() => {
    fetch("endpoint de agendamento")
      .then((response) => response.json())
      .then((data) => {
        setDate(new Date(data.date));
        // setTime(data.time);
        // setMeetingLink(data.meetingLink);
      })
      .catch((error) =>
        console.error("Erro ao obter dados do back-end:", error)
      );
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  /*{
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleLinkChange = (event) => {
    setMeetingLink(event.target.value);
  };
}*/
  const scheduleMeeting = () => {
    console.log("Data e Hora:", date);
    // console.log("Link do Google Meet:", meetingLink);
  };

  return (
    <div>
      <h2>Acompanhe o seu agendamento no Calendário</h2>
      <div className="calendar-content">
        <label>Data:</label>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      {/* <div>
        <label>Hora:</label>
        <input type="time" value={time} onChange={handleTimeChange} />
      </div>
      <div>
        <label>Link do Google Meet:</label>
        <input type="text" value={meetingLink} onChange={handleLinkChange} />
      </div>
      */}
      <button onClick={scheduleMeeting}>Acompanhar agendamento</button>
    </div>
  );
};

export default CalendarComponent;
