import React from "react";
import { useParams } from "react-router-dom";

function EventDetails() {
  const params = useParams();

  return (
    <div>
      <h1>Event Details</h1>
      <div>id:{params.eventId}</div>
    </div>
  );
}

export default EventDetails;
