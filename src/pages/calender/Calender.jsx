import { useState } from "react";
import "./calender.css";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Box, Stack, Paper, Typography } from "@mui/material";
import PageTitle from "../../components/PageTitle";

const Calender = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  let eventGuid = 0;
  function createEventId() {
    return String(eventGuid++);
  }

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEventClick(clickInfo) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <Box>
      <PageTitle title={"Calender"} body={"Show your activities and tasks"} />
      <Stack
        className="demo-app"
        gap={2}
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Paper className="demo-app-sidebar">
          <Typography
            sx={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}
          >
            All Events ({currentEvents.length})
          </Typography>
          <ul style={{ paddingLeft: "2rem" }}>
            {currentEvents.map((event, i) => (
              <li key={i}>
                <b>
                  {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </b>
                <i>{event.title}</i>
              </li>
            ))}
          </ul>
        </Paper>

        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          />
        </div>
      </Stack>
    </Box>
  );
};

export default Calender;
