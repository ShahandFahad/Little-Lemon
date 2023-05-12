import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI} from '../../utilities/API';
import { React, useReducer } from "react";
// TODO: 
// Need to work on this page as this is not behaving as required
// The available time slots are to be worked on so the only the remaining times slots are shown to the user
//  And Little fixes has to be done on the form

const updateTimeSlots = (availableTimeSlots, date) => {
  const response = fetchAPI(new Date(date));
 
  return (response.length !== 0) ? response : availableTimeSlots; 
}

// const initTimeSlots = initAvaliableTimeSlots => [...initAvaliableTimeSlots, ...fetchAPI(new Date())];



const Reservations = () => {
  //  const [
  //   availableTimeSlots, 
  //   dispatchTimeslotsOnChange
  // ] = useReducer(updateTimeSlots, [], initTimeSlots);


  const submitReservation = (reservation) => {
    console.log("Reservation From Data: ", reservation);
    const response = submitAPI(reservation);

    if (response) {
      alert("Data Submitted Successfully");
    } else {
      alert("Data Submission Failed");
    }

  }


  return (
    <>
      <BookingForm 
        // submitReservation={submitReservation} 
        // availableTimeSlots={availableTimeSlots} 
        // dispatchTimeslotsOnChange={dispatchTimeslotsOnChange}
      />
    </>
  )
};

export default Reservations;