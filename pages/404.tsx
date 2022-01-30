import { Card, Text, Badge, Group, useMantineTheme } from "@mantine/core";

import Image from "next/image";
import Link from "next/link";
import image404 from "../public/monke.gif";
const Custom404Page = () => (
  <div className="text-center">
    <Image
    className="bgWrap"
      src={image404}
      alt="Monke throwing computer"
      layout="fill"
      objectFit="cover"
      quality={100}
    />{" "}
    <div 
    style={{ margin:'auto'}}
    className="w-96 text-white text-center">
      <h1>404</h1>
      <p>
        Looks like one of our dev monkeys messed up the website
        again. Don&apos;t worry, we&apos;ll make sure to take away their bananas for a
        whole month. In the meantime, try the homepage
      </p>
    </div>
  </div>
);

export default Custom404Page;
