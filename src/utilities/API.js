const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

/*const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};*/

/**
 * 
 * @param {shahandfahad} date 
 * @returns Modifying fetchAPI function to return an object with three arrays of strings
 *         representing the available times for morning, afternoon and evening
 */
const fetchAPI = function(date) {
    let result = {morning: [], afternoon: [], evening: []};
    let random = seededRandom(date.getDate());

    // Morning Timings
    for(let i = 9; i <= 12; i++) {
        if(random() < 0.5) {
            result.morning.push(i + ':00');
        }
        if(random() < 0.5) {
            result.morning.push(i + ':30');
        }
    }  
    
    // Afternoon Timings
    for(let i = 12; i <= 16; i++) {
        if(random() < 0.5) {
            result.afternoon.push(i + ':00');
        }
        if(random() < 0.5) {
            result.afternoon.push(i + ':30');
        }
    }
    
    // Evening Timings
    for(let i = 16; i <= 21; i++) {
        if(random() < 0.5) {
            result.evening.push(i + ':00');
        }
        if(random() < 0.5) {
            result.evening.push(i + ':30');
        }
    }


    return result;
};

const submitAPI = function(formData) {
    return true;
};