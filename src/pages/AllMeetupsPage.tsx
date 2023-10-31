import React, { useEffect, useState } from "react";
import { Meetup } from "../api/model/Meetup";
import { findAllMeetups } from "../api/services/MeetupService";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    findAllMeetups().then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });
  });

  if (isLoading) {
    return (
      <div>
        <h1>All meetups</h1>
        <p>Loading ...</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>All meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </div>
    );
  }
}
