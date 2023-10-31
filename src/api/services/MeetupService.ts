import { Meetup } from "../model/Meetup";

const DUMMY_MEETUP_DATA: Meetup[] = [
  {
    id: 1,
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: 2,
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

export async function findAllMeetups(): Promise<Meetup[]> {
  return new Promise(resolve => setTimeout(resolve, 2000, DUMMY_MEETUP_DATA));
}

export async function createMeetup(meetup: any): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, 500, meetup));
}
