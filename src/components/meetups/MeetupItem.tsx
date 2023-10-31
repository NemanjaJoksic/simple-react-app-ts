import { Meetup } from "../../api/model/Meetup";
import Card from "../ui/Card";
import "./MeetupItem.css";

type MeetupItemProps = {
    meetup: Meetup;
}

export default function MeetupItem(props: MeetupItemProps) {
  return (
    <li className='item'>
      <Card>
        <div className='image'>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className='content'>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className='actions'>
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
}
