import Link from "next/link";
import { ICampaignGraphic } from "../../@types/generated/contentful";
import {
  Paper,
  Button,
  Progress,
  RingProgress,
  Grid,
  Text,
} from "@mantine/core";
import { NumberScroller } from "../NumberScroller";
import DonateLink from "../DonateLink";
import { useState, useEffect } from "react";

import AnimatedProgressBar from "../AnimatedProgressBar";
import ChevronTransition, { ChevronDirection } from "../ChevronTransition";
import Particles from "react-tsparticles";
import particlesConfig from "../../utils/global-ts-particles";


type CampaignGraphicProps = { entry: ICampaignGraphic };

const CampaignGraphic: React.FC<CampaignGraphicProps> = ({ entry }) => {
  const maxPercent = Math.round(
    (entry.fields.raised / entry.fields.goal) * 100
  );

  // create a stateful hook for the fundraising bar so that we can animate it later
  const [percentComplete, setPercentComplete] = useState(0);

  // animate the fundraising bar from 0% to the actual percentage
  useEffect(() => {
    const percentIncrementor = (currentPercentage: number) => {
      if (currentPercentage < maxPercent) {
        setTimeout(() => {
          const nextValue = currentPercentage + 0.5;

          percentIncrementor(nextValue);
          setPercentComplete(nextValue);
        }, 100);
      }
    };
    //console.log("Percent complete: " + percentComplete);

    setTimeout(() => {
      percentIncrementor(percentComplete);
    }, 100);
  }, []);

  return (
    <>
      {/* box shadow separator */}
      <div className="relative inline-block bg-gradient-to-tr from-red-500 to-blue-700 min-h-screen w-full text-center text-white align-middle h-100">
        <Particles
          id="tsparticles"
          width="1"
          height="1"
          options={particlesConfig}
          className="-z-1"
          style={{
            position: "sticky",
            left: 0,
            height: "100%",
            pointerEvents: "none",
          }}
        />

        <div className="flex flex-col items-center px-8 mb-20 xl:mb-0 mt-16 z-3">
          {/* Donation header w/ description */}
          <div className="text-center mx-auto">
            <h2 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-orange-500 pb-3.5">
              {entry.fields.title}
            </h2>

            <p className="underline decoration-wavy decoration-indigo-500 text-lg">
              $
              <NumberScroller
                from={0}
                to={entry.fields.raised}
                steps={500}
                delay={2000}
              />{" "}
              raised out of ${entry.fields.goal}{" "}
            </p>
            <div className="flex flex-col lg:flex-row">
              <div className="w-96 mx-auto">
                {/* <Progress
                  color="orange"
                  value={percentComplete}
                  label={`${percentComplete}%`}
                  size={60}
                  radius={"md"}
                  className=""
                /> */}
                <AnimatedProgressBar from={0} to={maxPercent / 100} width={400} />
              </div>

                <p text-align="left">
                  <u>KEY</u>
                  <br />
                  🟧Athletics<br/>
                  🟩Performances<br/>
                  🟥Education Funds<br/>
                  🟦PTOs
                </p>
                <div className="grid-container">
                <RingProgress
                  size={150}
                  thickness={15}
                  roundCaps
                  label={
                    <Text size="sm" align="center" color="white">
                      Fund Distribution
                    </Text>
                  }
                  sections={[
                    { value: 36, color: "orange" },
                    { value: 25, color: "teal" },
                    { value: 15, color: "red" },
                    { value: 24, color: "blue" },
                  ]}
                  className="transition-all delay-500 ease-in-out duration-1000 text-md"
                />
              </div>
            </div>

            <div className="my-3.5">
              <DonateLink link={entry.fields.donationLink}>Donate</DonateLink>
            </div>
          </div>
        </div>

        {/* Chevron Transition. You can change the color with the class name*/}
        <ChevronTransition
          height={100}
          chevronBias={25}
          className="bg-bootstrap-body"
          direction={ChevronDirection.Up}
        />
      </div>
    </>
  );
};

export default CampaignGraphic;
