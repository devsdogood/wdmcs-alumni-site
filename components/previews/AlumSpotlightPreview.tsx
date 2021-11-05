import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IAlumSpotlight } from "../../@types/generated/contentful";

type AlumSpotlightPreviewProps = {
  entry: IAlumSpotlight;
};

const AlumSpotlightPreview: React.FC<AlumSpotlightPreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.name} with image at link {entry.fields.image?.fields.file.url}
      and bio of
      {entry.fields.content &&
      documentToReactComponents(entry.fields.content)}
    </p>
  );
};

export default AlumSpotlightPreview;
