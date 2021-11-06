import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IAlumSpotlight } from "../../@types/generated/contentful";

type AlumSpotlightPreviewProps = {
  entry: IAlumSpotlight;
};

const AlumSpotlightPreview: React.FC<AlumSpotlightPreviewProps> = ({ entry }) => {
  return (
    
    <div className = "grid-item">
     <div className = "grid-item">
      <p>
        
        <h5>{entry.fields.name}</h5>
        Bio: {entry.fields.content && documentToReactComponents(entry.fields.content)}
      </p>
      {entry.fields.image && (<img width = "30%" src={entry.fields.image?.fields.file.url}></img>)}
      </div>
    </div>
  );
};

export default AlumSpotlightPreview;
