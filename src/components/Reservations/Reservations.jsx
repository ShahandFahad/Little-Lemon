import React from 'react';
import Header from '../Header/Header';
function Reservations() {
    const headerData = {
        cafeTitle: "Little Lemon",
        cafeLocation: "Chicago",
        cafeDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora deleniti eum repellat explicabo ratione quisquam fugiat quidem. Tempora eius deserunt corrupti esse nemo earum, a doloremque minus molestias! Quia.",
        cafeButtonName: "Reserve a Table",
    };
    
  return (
    <div>
      <Header />
    </div>
  );
};

export default Reservations;