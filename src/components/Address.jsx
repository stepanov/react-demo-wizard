import React, {Component} from 'react'

export default class Address extends Component {  
  render() {
    const {username, handleChange, currentStep} = this.props
    if (currentStep !== 2) {
      return null
    } 

    return (
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleChange}
        />
      </div>
    )
  }
}
