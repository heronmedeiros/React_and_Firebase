import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

import './TripList.css'

export default function TripList() {
  const [ url, setUrl ] = useState('http://localhost:3000/trips')
  const { data: trips, isPending, error } = useFetch(url);


  return (
    <div>
      <h2>TripList</h2>
      {isPending && <div>Loading trips... </div>}
      {error && <div>{error}</div>}

      <ul className="trip-list">
        { trips && trips.map( (trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
        ))}
        <div className='filters'>
        <button onClick={ () => setUrl('http://localhost:3000/trips?loc=europe')}>
          European Trips
        </button>

        <button onClick={ () => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>
      </ul>

    </div>
  )
}
