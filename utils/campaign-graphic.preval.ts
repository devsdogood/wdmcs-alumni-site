import preval from 'next-plugin-preval';
import { ContentTypes } from '../@types/contentTypes';
import getContentful from './contentful';

const getCampaignGraphic = async () => {
    const contentful = await getContentful();
    const campaignGraphicQuery = await contentful.getEntries({ content_type: ContentTypes.CampaignGraphic, include: 1 });
    const campaignGraphic = campaignGraphicQuery.items?.[0] || {donationLink:""};

    console.log(campaignGraphic);

    return campaignGraphic.fields;
}

export default preval(getCampaignGraphic());