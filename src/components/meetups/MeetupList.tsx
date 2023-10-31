import { Meetup } from "../../api/model/Meetup";

import MeetupItem from "./MeetupItem"
import "./MeetupList.css";

type MeetupListProps = {
    meetups: Meetup[];
}

export default function MeetupList(props: MeetupListProps) {
    return <ul className='list'>
        {props.meetups.map(meetup => (<MeetupItem key={meetup.id} meetup={meetup}/>))}
    </ul>
}
