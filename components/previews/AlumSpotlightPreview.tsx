import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IAlumSpotlight } from "../../@types/generated/contentful";

type AlumSpotlightPreviewProps = {
  entry: IAlumSpotlight;
};

const AlumSpotlightPreview: React.FC<AlumSpotlightPreviewProps> = ({ entry }) => {
  return (
    
    <div className = "grid-container">
     <div className = "grid-item">
      
      <div align="left" >
      {entry.fields.image && (<img className= "al-PIC"  src={entry.fields.image?.fields.file.url}></img>)}
      </div>
      <p className = "al-p">
        
        <h6>{entry.fields.name}</h6>
        Bio: {entry.fields.content && documentToReactComponents(entry.fields.content)}
      </p>
      </div>
    </div>
    
  );
};

export default AlumSpotlightPreview;
