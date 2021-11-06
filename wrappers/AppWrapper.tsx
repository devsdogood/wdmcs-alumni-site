import React from "react";
import { INavigationMenuFields } from "../@types/generated/contentful";
import NavigationMenu from "../components/NavigationMenu";
import menuData from '../utils/menu.preval';

const AppLayout: React.FC = ({ children }) => {
    const menu = menuData as INavigationMenuFields;
    const menuItems = menu.menuItems!;

    return (
        <>
            <NavigationMenu menuItems={menuItems} logo={menu.logo} />
            <div className="mt-5">
                {children}
            </div>
        </>
    );
};

export default AppLayout;
