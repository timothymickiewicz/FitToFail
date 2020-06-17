import React, {Fragment} from 'react';
import moment from 'moment';

class Toast extends React.Component {
    constructor(exercise, reps) {
      super(exercise, reps);
      this.date = moment().format("MM/DD/YYYY");
      this.exercise = exercise;
      this.reps = reps;
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    present = () => {
        return {value : 'Completed ' + this.exercise + ' for ' + this.reps + ' reps!'};
    }

    render() {
      return (
        <Fragment>
            <div className="alert alert-dark alert-dismissible fade show" role="alert">
                {this.present().value}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </Fragment>
      );
    }
  }

export default Toast;