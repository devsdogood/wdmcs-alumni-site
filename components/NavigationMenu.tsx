import { INavigationItem } from "../@types/generated/contentful";

const NavigationMenu: React.FC<{ menuItems: INavigationItem[] }> = ({ menuItems }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                WDMCS Alumni
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {menuItems.map((item) => (
                        <a className="nav-link" key={item.sys.id} href={item.fields.page?.fields.slug || item.fields.externalUrl}> {item.fields.title} </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
);

export default NavigationMenu;
