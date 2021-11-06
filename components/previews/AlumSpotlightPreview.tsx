import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IAlumSpotlight } from "../../@types/generated/contentful";

type AlumSpotlightPreviewProps = {
  entry: IAlumSpotlight;
};

const AlumSpotlightPreview: React.FC<AlumSpotlightPreviewProps> = ({ entry }) => {
  return (
    <div className="card">
      <div className="row">

        <div className="col-md alum-photo">
          {entry.fields.image && (
            <img
            className="card"
            alt={entry.fields.image?.fields.file.fileName}
            src={entry.fields.image?.fields.file.url}>  
            </img>
          )}
        </div>
        <div className="col-md alum-bio">
          <h2>{entry.fields.name}</h2>
          <p>
            {entry.fields.content && documentToReactComponents(entry.fields.content)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlumSpotlightPreview;
