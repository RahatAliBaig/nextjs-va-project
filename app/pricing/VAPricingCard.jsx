'use client'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="blue"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const carddetails = [
  {
    id:1,
    heading: "standard",
    price: 29,
    firstline: "5 team members",
    secondline: "200+ components",
    thirdline: "40+ built-in pages",
    fourthline: "1 year free updates",
    fifthline: "Life time technical support",
  },
  {
    id:2,
    heading: "Professional",
    price: 49,
    firstline: "5 team members",
    secondline: "200+ components",
    thirdline: "40+ built-in pages",
    fourthline: "1 year free updates",
    fifthline: "Life time technical support",
  },
  {
    id:3,
    heading: "Premium",
    price: 79,
    firstline: "5 team members",
    secondline: "200+ components",
    thirdline: "40+ built-in pages",
    fourthline: "1 year free updates",
    fifthline: "Life time technical support",
  },
];

const VAPricingCard = () => {
  return (
    <div className="lg:flex lg:flex-row md:flex md:flex-col md:columns-2  items-center justify-center gap-10" >
      {carddetails.map((user) => (
        <Card
          variant="gradient"
          className={`w-full max-w-xs p-5 mb-5 text-primary ${user.id===2?' bg-gradient-to-t from-cyan-500 to-secondary md:max-w-[382px] md:h-[620px]':'bg-gradient-to-b from-cyan-500 to-secondary h-sm drop-shadow-2xl'} `}
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-normal uppercase"
            >
              {user.heading}
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              <span className="mt-xxs text-4xl ">$</span>
              <div className=" text-transparent bg-clip-text bg-gradient-to-t from-second-secondary to-white"> {user.price}</div>
              {" "}
              <span className="self-end text-4xl">/mo</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-4">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white bg-white p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  {user.firstline}
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white bg-white p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  {user.secondline}
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white bg-white p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  {user.thirdline}
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white bg-white p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  {user.fourthline}
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white bg-white p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  {user.fifthline}
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-8 p-0">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] hover:fill-green-500 focus:scale-[1.02] active:scale-100 "
              ripple={false}
              fullWidth={true}
            >
              Buy Now
            </Button>
          </CardFooter>
        </Card>
     
      ))}
    </div>
  );
};

export default VAPricingCard;
