import React from "react";
import { INavigationMenuFields, ICampaignGraphic, ICampaignGraphicFields } from "../@types/generated/contentful";
import NavigationMenu from "../components/NavigationMenu";
import menuData from "../utils/menu.preval";
import campaignGraphicData from "../utils/campaign-graphic.preval";
import { NotificationsProvider } from '@mantine/notifications';

const AppLayout: React.FC = ({ children }) => {
  const menu = menuData as INavigationMenuFields;
  const menuItems = menu.menuItems!;

  // get the campaign Graphic so that we can get the donation fields for the navbar.
  const campaignGraphic = campaignGraphicData as ICampaignGraphicFields;

  return (
    <NotificationsProvider>
      <NavigationMenu logo={menu.logo} menuItems={menuItems} donateLink={campaignGraphic.donationLink} />
      {children}
    </NotificationsProvider>
  );
};

export default AppLayout;
