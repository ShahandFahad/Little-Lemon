import './Reserve.css';
import React from "react";

const Reserve = (props) => {

    return (
        <div className="reserve__buttons">
            {/* <button className='btn-reserve'>Cancel</button> */}
            {/* <input  className='btn-reserve' type='submit' value="Submit" /> */}
            <button  className='btn-reserve' type='submit' disabled={props.value}>Submit</button>
            {/* {
                console.log("Disabled: ", props.value)
            } */}

        </div>
    )
};

export default Reserve;