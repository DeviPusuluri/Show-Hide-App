// Write your code here
import {Component} from 'react'

import './index.css'
class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }
  onFirstName = () => {
    this.setState(prev => ({firstName: !prev.firstName}))
  }
  onLastName = () => {
    this.setState(prev => ({lastName: !prev.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div>
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              onClick={this.onFirstName}
              type="button"
              className="show-hide-button"
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>

          <div className="name-container">
            <button
              onClick={this.onLastName}
              type="button"
              className="show-hide-button"
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
