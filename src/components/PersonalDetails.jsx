import React, {Component} from 'react'

export default class PersonalDetails extends Component {  
  render() {
    const {email, handleChange, currentStep} = this.props
    if (currentStep !== 1) {
      return null
    } 

    return (
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
        />
      </div>
    )
  }
}
