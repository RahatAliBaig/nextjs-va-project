"use client"
import React from "react";
import { Button } from "@material-tailwind/react";

const MyButton = ({ text }) => {
  return (
    <Button ripple="light" className="bg-gradient-to-br from-blue-400 to-secondary md:py-2.5 md:px-4 md:text-xs text-xxs py-2 px-3  text-primary rounded-full hover:shadow-blue-200">
      {text}
    </Button>
  );
};

export default MyButton;
