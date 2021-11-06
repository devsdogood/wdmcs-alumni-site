import { INavigationItem } from "../@types/generated/contentful";

const NavigationMenu: React.FC<{menuItems: INavigationItem[]}> = ({ menuItems }) => (
    <>
        {menuItems.map((item) => (
            <div key={item.sys.id}>
                <a href={item.fields.page?.fields.slug || item.fields.externalUrl}> {item.fields.title} </a>
            </div>
        ))}
        <br />


    </>
);

export default NavigationMenu;
