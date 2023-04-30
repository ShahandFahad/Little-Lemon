import './GuestSelector.css';
import React, { useState, useEffect } from "react";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

const style =  {
    fontSize: '16px',
    color: 'red',
}

const GuestSelector = () => {
    let [guest, setGuest] = useState(1);
    const [warning, setWarning] = useState('');

    const increment = () => {

        if (guest < 6) {
            guest++;
            setGuest(guest);
            setWarning('');
        } else {
            setWarning('* Max 6 guests');
        }

    }

    const decrement =() => {

        if (guest > 1){
            guest--;
            setGuest(guest);
            setWarning('');
        } else {
            setWarning('* Min 1 guest');
        }

    }

    return (
        <div className='app__reservation-guest'>

            <h1 className='guest-title'>Guest</h1>

            <div className='app__reservation-guest-counter-box'>

                    <div className="app__reservation-guest-counter">
                        <CgMathPlus className='guest-increment' onClick={increment}/>
                            <pre> {guest} </pre>
                        <CgMathMinus className='guest-decrement' onClick={decrement}/>
                    </div>
                { // Conditional rendering based on guest count
                    guest <= 1 && (<span style={style}>{warning}</span>)
                        ||
                    guest >= 6 && (<span style={style}>{warning}</span>) 
                }

            </div>

        </div>
    );
};

export default GuestSelector;