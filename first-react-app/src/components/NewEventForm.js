import { useRef, useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
  const title = useRef();
  const date = useRef();
  const [location, setLocation] = useState('manchester');

  const resetForm = () => {
    title.current.value = '';
    date.current.value = '';
    setLocation('manchester');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const event ={
      title: title.current.value,
      date: date.current.value,
      location: location,
      id: Math.floor(Math.random() * 1000)
    }

    addEvent(event);
    resetForm();
  };


  return (
    <div>
      <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
          <span>Event Title</span>
          <input
            type='text'
            ref={title}
          />
        </label>

        <label>
          <span>Event Date</span>
          <input type='date'
          ref={date}
          />
        </label>
        <label>
          <span>Event Location</span>
          <select onChange={(event) => { setLocation(event.target.value) }}>
            <option value="manchester">Manchester</option>
            <option value="london">London</option>
            <option value="caardiff">Caardiff</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
