import Link from "next/link";
import { ICampaignGraphic } from "../../@types/generated/contentful";

type CampaignGraphicProps = { entry: ICampaignGraphic };

const CampaignGraphic: React.FC<CampaignGraphicProps> = ({ entry }) => {

  const percentComplete = (entry.fields.raised / entry.fields.goal) * 100;

  return (
    <div className='container campaign-graphic-container'>
      <h2> {entry.fields.title} {" "}  </h2>
      <p>
        ${entry.fields.raised} raised out of ${entry.fields.goal} {" "}
        <a href={entry.fields.donationLink}>Help us reach our goal!</a>
      </p>
      
      <div className="progress" style={{ height: '40px' }}>
        <div className="progress-bar" role="progressbar" style={{ width: `${percentComplete}%`}}></div>
      </div>
    </div>
  )
};

export default CampaignGraphic;
