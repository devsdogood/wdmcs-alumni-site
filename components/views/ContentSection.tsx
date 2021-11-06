import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContentSection } from "../../@types/generated/contentful";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b style={{color:"red"}}>{text}</b>,

  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h1 style={{color:"orange"}}>{children}</h1>,
  },
};
type ContentSectionProps = { entry: IContentSection };

const ContentSection: React.FC<ContentSectionProps> = ({ entry }: ContentSectionProps) => (
  <>
    {documentToReactComponents(entry.fields.content, options)}
    
  </>
);

export default ContentSection;
