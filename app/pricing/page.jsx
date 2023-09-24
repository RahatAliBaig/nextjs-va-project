"use client";

import React from "react";
import VAPricingCard from "./VAPricingCard";

const VAPricing = () => {
  return (
    <div className="font-poppins text-center sm:m-sm m-lg bg-primary">
      <div className="p-5 ">
        <h1 className="text-primary-heading text-pr">Choose Your Best Plan</h1>
        <div className="flex items-center justify-center w-full">
          <div className="mt-5 mb-5 mr-3 w-1/5 border border-blue-gray-800">
            {" "}
          </div>
          <div className="text-secondary-heading">
            Here's What We Can Offer You
          </div>
          <div className="mt-5 mb-5 ml-3 w-1/5 border border-blue-gray-800">
            {" "}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <VAPricingCard />
      </div>
    </div>
  );
};

export default VAPricing;
