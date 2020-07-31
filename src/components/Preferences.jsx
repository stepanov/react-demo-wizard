import React, {Component} from 'react'

export default class Preferences extends Component {  
  render() {
    const {password, handleChange, currentStep} = this.props
    if (currentStep !== 3) {
      return null
    } 

    return (
      <div className="form-group">
        <label htmlFor="email">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
        />
      </div>
    )
  }
}
