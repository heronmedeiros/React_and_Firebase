// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal'

// use state not allowed

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

    // use state not allowed
  }
  const subtitle = "All the latest events in mario kingdom";

  return (
    <div className="App">
      <Title title="Events in Your area" subtitle={subtitle}/>

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
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </React.Fragment>
      ))}

      <Modal>
        <h2>10% off Coupon Code!!</h2>
        <p>Use de code NINJA10 at the checkout</p>
      </Modal>
    </div>
  );
}

export default App;
