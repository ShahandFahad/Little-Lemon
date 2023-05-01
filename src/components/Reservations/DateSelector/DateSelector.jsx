import './DateSelector.css'
import React, {useState} from 'react';


const DateSelector = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toDateString());

    // split time and date into arrays based on delimiter
    const timeStr = time.toString().split(' ');
    const dateStr = date.toString().split(' ');

    let cafeStatus = 'Closed';

    // update time and date every 1000 milliseconds
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toDateString());
    }, 1000);

    /*
        Get the date in 24Hr format
        Then split it on space delimite
        Then split time at 0 index on colon (:) delimiter
        Then get the hour at 0 index
        Then convert it to an integer
        Then check if it is between 9 and 21
        If it is, then we are open
        Else we are closed
    */
    const hour = new Date().toTimeString().split(' ')[0].split(':');
    // console.log(parseInt(hour[0]))
    
    if (parseInt(hour[0]) >= 9 && parseInt(hour[0]) <= 21) {
        // console.log('WE are Open!');
        cafeStatus = 'Open';
    } else {
        // console.log('WE are closed!');
        cafeStatus = 'closed';
    }
    return (
        <div className="reservation__date-selector">
        <div className='reservation__date-selector-date-time'>
            <h1 className='title'>Date</h1>
            <div className='date-time'>

                <div className='date'>
                    {
                        dateStr[2]  + " " + dateStr[1] + " " + dateStr[3]
                    }
                </div>

                <div className='time'>
                    {
                        timeStr[0] + " " +timeStr[1]
                    }
                </div>

            </div>
        </div>
        <div className='open-closed'>
                <h1 className={`title ${cafeStatus} status`}>{cafeStatus}</h1>
        </div>
        </div>
    );
};

export default DateSelector;