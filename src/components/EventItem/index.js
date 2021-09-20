// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvent, getEventId} = props
  const {id, imageUrl, name, location} = eachEvent

  const onClickCard = () => {
    getEventId(id)
  }

  return (
    <li className="event-card" onClick={onClickCard}>
      <img src={imageUrl} alt={name} className="image-event" />
      <h1 className="event-name">{name}</h1>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
