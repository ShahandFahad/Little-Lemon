import './TimeSelector.css';
import React from 'react';

const timeSlots = {
    morning: [
        '8:00',
        '8:30',
        '9:00',
        '9:30',
        '10:00',
        '10:30',
    ],
    afternoon: [
        '1:00',
        '1:30',
        '2:00',
        '2:30',
        '3:00',
        '3:30',
    ],
    evening: [
        '7:00',
        '7:30',
        '8:00',
        '8:30',
        '9:00',
        '9:30',
    ]
};

const TimeCapsule = (props) => {
    return (
            <div>
                <h1>{props.morning}</h1>
                <div className='timeslots-capsules'>
                {
                    props.slots.map((item) => {
                        return (
                        <span className='radio-lablel-box'>
                            <label htmlFor={item} className='radio-btn-label'>
                                <input type="radio" name="timeslots-m" id={item} />
                                {item}
                            </label>
                        </span>)
                    })
                }
                </div>
            </div> 
    );
}

const TimeSelector = () => {
    const hour = new Date().toTimeString().split(' ')[0].split(':');
    // console.log("Time: ", hour);

    let isMorning = false;
    let isAfternoon = false;
    let isEvening = false;
    // const hour = 21;
    if (parseInt(hour) >= 9 && parseInt(hour) < 12) {

        isMorning = true;
        isAfternoon = false;
        isEvening = false;

    } else if (parseInt(hour) >= 12 && parseInt(hour) < 16) {

        isMorning = false;
        isAfternoon = true;
        isEvening = false;
    } else if (parseInt(hour) >= 16 && parseInt(hour) < 21) {

        isMorning = false;
        isAfternoon = false;
        isEvening = true;

    }

    console.log(`Morning: ${isMorning}`);
    console.log(`Aftenoon: ${isAfternoon}`);
    console.log(`Evening: ${isEvening}`);
    
    return (
        <div className="reservation__time-selector">
            {
                (isMorning && ( <TimeCapsule morning="Morning" slots={timeSlots.morning}/> ))

                ||

                (isAfternoon && ( <TimeCapsule morning="Afternoon" slots={timeSlots.afternoon}/>))

                ||

                (isEvening && ( <TimeCapsule morning="Evening" slots={timeSlots.evening}/> ))

            }
            {/* <div>
                <h1>Morning</h1>
                <div className='timeslots-capsules'>
                {
                    timeSlots.morning.map((item) => {
                        return (
                        <span className='radio-lablel-box'>
                            <label htmlFor={item} className='radio-btn-label'>
                                <input type="radio" name="timeslots-m" id={item} />
                                {item}
                            </label>
                        </span>)
                    })
                }
                </div>
            </div> */}
            {/* {
                console.log(timeSlots.morning)
            }
            <div>
                <h1>Afternoon</h1>
                <div className='timeslots-capsules'>
                {
                    timeSlots.afternoon.map((item) => {
                        return (
                        <span className='radio-lablel-box'>
                            <label htmlFor={item} className='radio-btn-label'>
                                <input type="radio" name="timeslots-a" id={item} />
                                {item}
                            </label>
                        </span>)
                    })
                }
                </div>
            </div> */}
            {/* <div>
                <h1>Evening</h1>
                <div className='timeslots-capsules'>
                {
                    timeSlots.evening.map((item) => {
                        return (
                        <span className='radio-lablel-box'>
                            <label htmlFor={item} className='radio-btn-label'>
                                <input type="radio" name="timeslots-e" id={item} />
                                {item}
                            </label>
                        </span>)
                    })
                }
                </div>
            </div> */}
        </div>
    );
};

export default TimeSelector;

// TODO:
// General:
// 1. Add Time Component, which display Day time (morning, afternoon, evening) and time slots for each day time
// 2. Add Context for the date and time to acess all over the reservation component
// 3. Based on the date and time, display the available time slots and day time title
// 4. Add a button to submit the reservation
// 5. Also diable time compnent if cafe is closed
// 6. Collect data in json format and send it to the server mockup server
// 7. On confirm show confirmation message popup and disable the time component (or show the time component with the selected time slot) 

// Time Component:
// Example: 
// if currentHour is between 8:00 and 11:00
//      Morning: 8:00, 8:30, 9:00, 9:30, 10:00, 10:30

// if currentHour is between 13:00(1) and 16:00(4)
//      Afternoon: 1:00, 1:30, 2:00, 2:30, 3:00, 3:30

// if currentHour is between 19:00(7) and 22:00(10)
//      Evening: 7:00, 7:30, 8:00, 8:30, 9:00, 9:30

//  Reservation Component:
//      Cancel: Cancel the reservation
//      Confirm: Confirm the reservation
//      Disable Confirm button if no time slot is selected
