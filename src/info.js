import React from 'react';
import moment from 'moment';
class Info {
    constructor(exercise, reps) {
        this.date = moment().format("MM/DD/YYYY")
        this.exercise = exercise;
        this.reps = reps;
    }
  
    present = () => {
        return {value : 'Completed ' + this.exercise + ' for ' + this.reps + ' reps!'};
    }
}

export default Info;