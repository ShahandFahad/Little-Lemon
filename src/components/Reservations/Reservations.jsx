import React, { useState } from 'react';
import GuestSelector from './GuestSelector/GuestSelector';
import DateSelecotr from './DateSelector/DateSelector';
import TimeSelector from './TimeSelector/TimeSelector';

import Reserve from './Reserve/Reserve';

function Reservations() {
  const [time, setTime] = useState('00:00');
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState(null);
  const [ocassion, setOccasion] = useState('birthday');

  // handler function in the Parent component
  // time is passed to it from child component
  /*
    passing chooseTime handler function as props to TimeSelector component and then to TimeCapsule component from there on each click on radio button a specific time value is passed to it.
  */
  const chooseTime = (time) => {
    setTime(time);

    console.log("Time: ", time);
  }

  // handler function in the Parent component
  const chooseGuest = (guests) => {
    setGuests(guests);
    console.log("Guests: ", guests);
  }

  // handler function in the Parent component to get date selected from child ccomponent

  const chooseDate = (date) => {
    setDate(date);
    console.log("Date: ", date);
  }    

  const chooseOcassion = (ocassion) => {
    setOccasion(ocassion);
    console.log("Ocassion: ", ocassion);
  }

  return (
    <div>
      <GuestSelector chooseGuest={ chooseGuest } />
      <DateSelecotr chooseDate={chooseDate} chooseOcassion={chooseOcassion} ocassion={ocassion}/>
      <TimeSelector chooseTime={ chooseTime } />
      <Reserve />
    </div>
  );
};

export default Reservations;