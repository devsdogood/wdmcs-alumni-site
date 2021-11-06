import Link from "next/link";
import { ICampaignGraphic } from "../../@types/generated/contentful";

type CampaignGraphicProps = { entry: ICampaignGraphic };

const CampaignGraphic: React.FC<CampaignGraphicProps> = ({ entry }) => {

  const percentComplete = (entry.fields.raised / entry.fields.goal) * 100;

  return (
    <div className='container campaign-graphic-container'>
      {entry.fields.title} campaign:  
      {entry.fields.raised} raised out of {entry.fields.goal}
      <Link href={entry.fields.donationLink}>Donate</Link>
      
      <div className="progress" style={{ height: '40px' }}>
        <div className="progress-bar" role="progressbar" style={{ width: `${percentComplete}%`}}></div>
      </div>
    </div>
  )
};

export default CampaignGraphic;
