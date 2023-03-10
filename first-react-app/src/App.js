// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

// use state not allowed

function App() {
  const [showModal, setshowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });

    setshowModal(false);
  }

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

      {showEvents && <EventList events={events} handleClick={handleClick} /> }

      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />
      </Modal>}

      <div>
        <button onClick={() => {setshowModal(true)}}>
          Add new event
        </button>
      </div>
    </div>
  );
}

export default App;
