import React, { useState, useEffect } from 'react';
import GuestSelector from './GuestSelector/GuestSelector';
import DateSelecotr from './DateSelector/DateSelector';
import TimeSelector from './TimeSelector/TimeSelector';

import Reserve from './Reserve/Reserve';

// const reservationData = {guests: '', date: '', time: '', ocassion: ''};

function BookingForm(props) {
  const [time, setTime] = useState('00:00');
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState(null);
  const [ocassion, setOccasion] = useState('birthday');

  // contains the data of the user from the reservation page which will be submitted via server to the database
  const [reservation, setReservation] = useState({guests: '', date: '', time: '', ocassion: ''});

  // handler function in the Parent component
  // time is passed to it from child component
  /*
    passing chooseTime handler function as props to TimeSelector component and then to TimeCapsule component from there on each click on radio button a specific time value is passed to it.
  */
  const chooseTime = (time) => {
    setTime(time);

    // console.log("Time: ", time);

    // reservationData['time'] = time;
    setReservation({...reservation, time: time});
  }

  // handler function in the Parent component
  const chooseGuest = (guests) => {
    setGuests(guests);
    // console.log("Guests: ", guests);

    // reservationData['guests'] = guests;
    setReservation({...reservation, guests: guests});
  }

  // handler function in the Parent component to get date selected from child ccomponent

  const chooseDate = (date) => {
    setDate(date);
    // console.log("Date: ", date);

    // reservationData['date'] = date;
    setReservation({...reservation, date: date});
  }    

  const chooseOcassion = (ocassion) => {
    setOccasion(ocassion);
    // console.log("Ocassion: ", ocassion);

    // reservationData['ocassion'] = ocassion;
    setReservation({...reservation, ocassion: ocassion});
  }

  console.log("RESERVATION PAGE: ", reservation);


  // Form Submission
  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.submitReservation(reservation);
  }


  return (
    <div>
      <form action={onSubmitHandler}>
        <GuestSelector chooseGuest={ chooseGuest } />
        <DateSelecotr chooseDate={chooseDate} chooseOcassion={chooseOcassion} ocassion={ocassion}/>
      <TimeSelector chooseTime={ chooseTime } availableTimeSlots={props.availableTimeSlots} />
        <Reserve />
      </form>
    </div>
  );
};

export default BookingForm;