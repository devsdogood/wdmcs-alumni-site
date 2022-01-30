import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { INavigationMenuFields } from "../@types/generated/contentful";
import { Button, Burger } from "@mantine/core";
import DonateButton from "./NavDonationButton";
import {useRouter} from 'next/router';

interface IWDMCSNavigationMenuFields extends INavigationMenuFields {
  donateLink: string
}

const NavigationMenu: React.FC<IWDMCSNavigationMenuFields> = ({
  menuItems,
  logo,
  donateLink,
}) => {
  const [mobileClosed, setMobileClosed] = useState(true);
  const router = useRouter();

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              {/* Logo in navbar */}
              <div className="flex items-center py-3 px-2">
                  <Image
                    src={`https:${logo.fields.file.url}`}
                    alt={logo.fields.description}
                    height={50}
                    width={200}
                  />
              </div>
              <div className="hidden md:flex items-center space-x-1">
                {/* Map every link/item into navbar */}
                {menuItems.map((item) => (
                  <div key={item.sys.id}>
                    <Link
                      href={
                        item.fields.page?.fields.slug ||
                        item.fields.externalUrl ||
                        ""
                      }
                    >
                      <a className={`mr-4 hover:text-gray-500 py-2 px-3 rounded-2xl ${(router.asPath === item.fields.page?.fields.slug || `${router.asPath}/` === item.fields.page?.fields.slug) && 'bg-gray-200'}`}>
                        {item.fields.title}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
              <DonateButton link={donateLink}>Donate</DonateButton>
            </div>
            {/* Button that controls collapsable navbar while resolution is of mobile size */}
            <div className="md:hidden flex items-center">
                
               

              <Button
                className="outline-none mobile-menu-button hover:text-orange-500"
                variant="outline"
                color="dark"
                onClick={() => setMobileClosed((o) => !o)}
              >
                <svg
                  className=" w-6 h-6 text-black-500 hover:text-orange-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile navbar */}
        <div className={`${mobileClosed && "hidden"} mobile-menu md:hidden`}>
          <div className="grid grid-cols-1 gap-y-3 place-items-center">
            {menuItems.map((item) => (
              <div key={item.sys.id}>
                <Link
                  href={
                    item.fields.page?.fields.slug ||
                    item.fields.externalUrl ||
                    ""
                  }
                >
                  <a className="mr-4 hover:text-gray-500">
                    {item.fields.title}
                  </a>
                </Link>
              </div>
            ))}
            <div>
              <DonateButton link={donateLink}>Donate</DonateButton>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;
