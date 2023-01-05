import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const resetForm = () => {
    setTitle('');
    setDate('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const event ={
      title: title,
      date: date,
      id: Math.floor(Math.random * 1000)
    }

    console.log(event)
    resetForm();
  };

  return (
    <div>
      <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
          <span>Event Title</span>
          <input
            type='text'
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>Event Date</span>
          <input type='date'
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />
        </label>

        <p>title - {title}, date - {date}</p>
        <p onClick={resetForm}>Reset the form</p>
        <button>Submit</button>
      </form>
    </div>
  )
}
