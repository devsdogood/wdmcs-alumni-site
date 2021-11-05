import Link from "next/link";
import { ICampaignGraphic } from "../../@types/generated/contentful";

type CampaignGraphicProps = { entry: ICampaignGraphic };

const CampaignGraphic: React.FC<CampaignGraphicProps> = ({ entry }) => (
  <div>
    {entry.fields.title} campaign:
    {entry.fields.raised} raised out of {entry.fields.goal}
    <Link href={entry.fields.donationLink}>Donate</Link>
  </div>
);

export default CampaignGraphic;
