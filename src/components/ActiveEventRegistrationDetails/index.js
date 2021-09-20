// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  render() {
    const {status} = this.props

    switch (status) {
      case YET_TO_REGISTER:
        return <p>not registered</p>
      case REGISTERED:
        return <p> registered</p>
      case REGISTRATIONS_CLOSED:
        return <p>close registered</p>
      case status.initial:
        return (
          <p className="dec">
            Click on a event to see the details of registration status
          </p>
        )
      default:
        return null
    }
  }
}
export default ActiveEventRegistrationDetails
