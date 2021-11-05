import Link from 'next/link'
import { IEvent } from "../../@types/generated/contentful";

type EventPreviewProps = {
  entry: IEvent;
};

const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title}{" "}
      {
        entry.fields.rsvpLink &&
        <Link href={entry.fields.rsvpLink}>RSVP</Link>
      }
    </p>
  );
};

export default EventPreview;
