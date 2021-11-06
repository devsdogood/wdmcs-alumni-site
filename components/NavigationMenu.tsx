import Image from "next/image";
import Link from "next/link";
import { INavigationMenuFields } from "../@types/generated/contentful";

const NavigationMenu: React.FC<INavigationMenuFields> = ({ menuItems, logo }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div style={{position: 'relative', height: 60, width: 150}}>
                <Link href="/" passHref>
                    <a className="navbar-brand">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src={`https:${logo.fields.file.url}`}
                            alt={logo.fields.description}
                            height={100}
                            width={100}
                        />
                    </a>
                </Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {menuItems.map((item) => (
                        <div className="nav-link" key={item.sys.id}>
                            <Link href={item.fields.page?.fields.slug || item.fields.externalUrl || ''}>{item.fields.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="nav navbar-nav navbar-right">
                <button type="button" className="btn btn-light">Donate</button>
            </div>
        </div>
    </nav>
    
    
);

export default NavigationMenu;
