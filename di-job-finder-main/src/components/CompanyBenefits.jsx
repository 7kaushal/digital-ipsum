import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const benefits = [
  {
    title: "Insurance, Health & Wellness",
    details:
      "Health Insurance, Dental Insurance, Flexible Spending Account (FSA), Vision Insurance, Health Savings Account (HSA), Life Insurance etc",
  },
  {
    title: "Financial & Retirement",
    details:
      "Health Insurance, Dental Insurance, Flexible Spending Account (FSA), Vision Insurance, Health Savings Account (HSA), Life Insurance etc",
  },
  {
    title: "Family & Parenting",
    details:
      "Health Insurance, Dental Insurance, Flexible Spending Account (FSA), Vision Insurance, Health Savings Account (HSA), Life Insurance etc",
  },
  {
    title: "Vacation & Time Off",
    details:
      "Health Insurance, Dental Insurance, Flexible Spending Account (FSA), Vision Insurance, Health Savings Account (HSA), Life Insurance etc",
  },
  {
    title: "Perks & Discounts",
    details:
      "Health Insurance, Dental Insurance, Flexible Spending Account (FSA), Vision Insurance, Health Savings Account (HSA), Life Insurance etc",
  },
  {
    title: "Professional Support",
    details:
      "Health Insurance, Dental Insurance, Flexible Spending Account (FSA), Vision Insurance, Health Savings Account (HSA), Life Insurance etc",
  },
];

const CompanyBenefits = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-lg font-semibold mb-2">Company Benefits</h2>
      <p className="text-gray-500 mb-6">
        List based on reports from current and former employees. It may not be
        complete.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div>
              <CheckCircleIcon className="size-5 m-1 text-green-600" />
            </div>
            <div>
              <h3 className=" font-medium">{benefit.title}</h3>
              <p className="text-gray-500">{benefit.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyBenefits;
