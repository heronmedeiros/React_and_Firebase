// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    {title: 'heron birthday', id: 1},
    {title: 'stream', id: 2},
    {title: 'race', id: 3}
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return setEvents(events.filter((event) => {
        return id !== event.id
      }));
    })
  }

  return (
    <div className="App">
      {showEvents && (
        <div>
          <button onClick={() => { setShowEvents(false) }}> hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => { setShowEvents(true) }}> show events</button>
        </div>
      )}

      {showEvents && events.map( (event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
