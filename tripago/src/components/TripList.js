import { useState, useEffect, useCallback } from 'react';
import './TripList.css'

export default function TripList() {
  const [ trips, setTrips ] = useState([]);
  const [ url, setUrl ] = useState('http://localhost:3000/trips')

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTrips(json);
  }, [url]);
      // fetch(url)
    //   .then(resp => resp.json())
    //   .then(json => setTrips(json))

  useEffect( () => {
    fetchTrips();
  }, [fetchTrips])
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
