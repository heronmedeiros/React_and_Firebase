// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal'
import EventList from './components/EventList';

// use state not allowed

function App() {
  const [showModal, setshowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    {title: 'heron birthday', id: 1},
    {title: 'stream', id: 2},
    {title: 'race', id: 3}
  ])

  console.log(showModal);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return setEvents(events.filter((event) => {
        return id !== event.id
      }));
    })

    // use state not allowed
  }

  const handleClose = () => {
    setshowModal(false);
  };

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

      {showModal && <Modal handleClose={handleClose}>
        <h2>10% off Coupon Code!!</h2>
        <p>Use de code NINJA10 at the checkout</p>
      </Modal>}

      <div>
        <button onClick={() => {setshowModal(true)}}>show Modal</button>
      </div>
    </div>
  );
}

export default App;
