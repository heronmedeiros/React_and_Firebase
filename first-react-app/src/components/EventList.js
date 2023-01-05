import React, { Fragment } from 'react';

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {
        events.map( (event, index) => (
            <Fragment key={event.id}>
              <h2>{index} - {event.title}</h2>
              <button onClick={() => handleClick(event.id)}>delete event</button>
            </Fragment>
          ))
      }
    </div>
  )
}
