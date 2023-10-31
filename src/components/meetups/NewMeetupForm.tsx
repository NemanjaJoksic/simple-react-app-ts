import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createMeetup } from "../../api/services/MeetupService";
import Card from "../ui/Card";
import "./NewMeetupForm.css";

export default function NewMeetupForm() {
  const navigate = useNavigate();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: React.SyntheticEvent) {
    console.log("Submit Add New Meetup form");
    event.preventDefault();

    const meetup = {
      title: titleInputRef.current?.value,
      image: imageInputRef.current?.value,
      address: addressInputRef.current?.value,
      description: descriptionInputRef.current?.value,
    };

    createMeetup(meetup).then(() => navigate("/"));
  }

  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className="control">
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className="control">
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className="control">
          <label htmlFor="description">Description</label>
          <textarea id="description" ref={descriptionInputRef} />
        </div>
        <div className="actions">
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
