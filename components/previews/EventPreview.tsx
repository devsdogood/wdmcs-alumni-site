import Link from 'next/link'
import { IEvent } from "../../@types/generated/contentful";


type EventPreviewProps = {
  entry: IEvent;
};


const EventPreview: React.FC<EventPreviewProps> = ({ entry }) => {
  return (
    <div className="card">
      <h3>
        {entry.fields.title}{" "}
      </h3>
      <h4>
        We&apos;d love to see you there! Please RSVP here: 
        <button type="button" className="btn btn-primary">
          {entry.fields.rsvpLink && <Link href={entry.fields.rsvpLink}>RSVP</Link>}
        </button>
      </h4>
      
      <p>
        {entry.fields.description}
      </p>
      <p>
        <strong>
          Event Start: 
        </strong>
        {entry.fields.start} 
      </p>
      <p>
        <strong>
          Event End: 
        </strong>
        {entry.fields.end}
      </p>
    </div>
  );
};

export default EventPreview;  
