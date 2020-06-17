import React, {Fragment} from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
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
  
    render() {
      return (
          <Fragment>
            <form onSubmit={this.handleSubmit}/>
                <div className="form-group">
                    <label>Exercise</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Sets</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Reps</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Weight</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            <form/>
        </Fragment>
      );
    }
  }

export default Form;