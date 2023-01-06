import { useState, useEffect } from 'react';
import './TripList.css'

export default function TripList() {
  const [ trips, setTrips ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:3000/trips')
      .then(resp => resp.json())
      .then(json => setTrips(json))

  }, [])
  console.log(trips);


  return (
    <div>
      <h2>TripList</h2>

      <ul className="trip-list">
        { trips.map( (trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}
