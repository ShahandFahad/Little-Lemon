import React from 'react';
import GuestSelector from './GuestSelector/GuestSelector';
import DateSelecotr from './DateSelector/DateSelector';
import TimeSelector from './TimeSelector/TimeSelector';

function Reservations() {

    
  return (
    <div>
      <GuestSelector />
      <DateSelecotr />
      <TimeSelector />
    </div>
  );
};

export default Reservations;