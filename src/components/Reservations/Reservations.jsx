import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI} from '../../utilities/API';
import { React, useReducer } from "react";
// TODO: 
// Need to work on this page as this is not behaving as required
// The available time slots are to be worked on so the only the remaining times slots are shown to the user
//  And Little fixes has to be done on the form

const updateTimeSlots = (availableTimeSlots, date) => {
  const response = fetchAPI(new Date(date));
 
  return (
    response.morning.length !== 0 && response.afternoon.length !== 0 && response.evening.length !== 0
    ) ? response : availableTimeSlots; 
}

const initTimeSlots = (initAvaliableTimeSlots) => {
    // return [...initAvaliableTimeSlots, ...fetchAPI(new Date())];
    return {
        morning: [...initAvaliableTimeSlots.morning, ...fetchAPI(new Date()).morning], 
        afternoon: [...initAvaliableTimeSlots.afternoon, ...fetchAPI(new Date()).afternoon], 
        evening: [...initAvaliableTimeSlots.evening, ...fetchAPI(new Date()).evening]
    };
}

const Reservations = () => {

  // Reducer hook which will update the available time slots and initialize the available time slots
   const [
    availableTimeSlots, 
    dispatchTimeslotsOnChange
  ] = useReducer(updateTimeSlots, {morning: [], afternoon: [], evening: []}, initTimeSlots);

  console.log("AV:", availableTimeSlots);

  // Handler Function to submit the reservation data to the server
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
        submitReservation={submitReservation} 
        availableTimeSlots={availableTimeSlots} 
        dispatchTimeslotsOnChange={dispatchTimeslotsOnChange}
      />
    </>
  )
};

export default Reservations;