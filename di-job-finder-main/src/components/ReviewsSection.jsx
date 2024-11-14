import React from "react";
import StarRating from "./StarRating";
import {
  CheckCircleIcon,
  FlagIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  ShareIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const reviews = [
  {
    name: "Connor Byrd",
    rating: 4.8,
    position: "Former Employee - Consulting Management",
    location: "Orem, UT",
    date: "1 Jan 2020",
    recommended: true,
    approved: true,
    topReview: true,
    title: "Adobe supports a work hard, play hard mentality.",
    description:
      "Work life balance is possibly the best in the industry. Moderately competitive pay, hard to compete with FAANG numbers, but close.",
    helpfulCount: 12,
    notRecommended: false,
  },
  {
    name: "Lenora Davidson",
    rating: 4.8,
    position: "Current Employee - Software Engineer",
    location: "San Francisco, CA",
    date: "1 Jan 2020",
    recommended: true,
    approved: true,
    topReview: true,
    title: "Great Place to work",
    description:
      "I have been working at Adobe full-time for more than 3 years. Great work life balance and people. The cons is just takes a long time to make a decisions because everyone wants a say in the outcome.",
    helpfulCount: 4,
    notRecommended: false,
  },
  {
    name: "Stanley Hill",
    rating: 4.8,
    position: "Current Employee - Senior Solutions Consultant",
    location: "Denver, CO",
    date: "1 Jan 2020",
    recommended: true,
    approved: true,
    topReview: false,
    title: "A breath of fresh air",
    description:
      "Amazing culture. My team has been so welcoming and helpful as I onboard. It is amazing to see so many women in the leadership roles. We are all equal here. Covid. It's been different to onboard during a time of a global pandemic. BUT Adobe has been amazing so no cons so far.",
    helpfulCount: 0,
    notRecommended: false,
  },
  {
    name: "Zachary Hansen",
    rating: 5.0,
    position: "Current Employee - Senior Solutions Consultant",
    location: "Denver, CO",
    date: "1 Jan 2020",
    recommended: true,
    approved: true,
    topReview: false,
    title: "Excellent Experience",
    description:
      "I worked at Adobe full-time for more than 3 years. Great on-boarding for new grads. Many networking and social events. Excellent work-life balance. Perfect team and company culture.",
    helpfulCount: 0,
    notRecommended: false,
  },
  {
    name: "Zachary Hansen",
    rating: 1.0,
    position: "Current Employee - Senior Solutions Consultant",
    location: "Denver, CO",
    date: "1 Jan 2020",
    recommended: false,
    approved: true,
    topReview: false,
    title: "Epic fail",
    description:
      "I worked at Adobe full-time for more than 3 years. Great on-boarding for new grads. Many networking and social events. Excellent work-life balance. Perfect team and company culture.",
    helpfulCount: 0,
    notRecommended: true,
  },
];

const ReviewsSection = () => {
  return (
    <div className="p-8 bg-white">
      <div className="mb-8">
        <div className="flex justify-between">
          <h2 className="font-semibold mb-4">Reviews</h2>
          <p className="text-sm text-gray-400">Last updated, Feb 12, 2020</p>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center mb-2">
            <span className="text-4xl font-bold mr-2">4.8</span>

            <span className="text-gray-600 text-sm ml-2">
              <StarRating rating={4.8} totalStars={5} />
              1,209 reviews
            </span>
          </div>

          <div className="flex border mb-4 w-2/3">
            <MagnifyingGlassIcon className="size-5 m-3 text-gray-400 " />
            <input
              type="text"
              placeholder="Search job title"
              className="p-2 flex-1"
            />
            <button className="bg-orange-500 text-white p-2">
              Search Review
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Showing: 34 jobs open</span>
          <span className="flex items-center text-sm text-gray-400">
            Sort by:
            <select className="border-b-2 text-black p-2 mx-2 rounded">
              <option>Popular</option>
              <option>Recent</option>
            </select>
            FILTER REVIEW
          </span>
        </div>
      </div>
      <div>
        {reviews.map((review, index) => (
          <div key={index} className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex items-center mb-2">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div className="">
                <div className="flex items-center">
                  <h3 className="font-semibold">{review.name}</h3>
                </div>
                <div className="text-gray-500 text-sm flex space-x-8">
                  <StarRating rating={review.rating} totalStars={5} />
                  <div>
                    {review.position} in {review.location}
                  </div>
                </div>
              </div>
              <div className="ml-auto text-gray-400 text-sm">{review.date}</div>
            </div>
            <div className="my-8">
              {review.recommended && (
                <span className="bg-green-100 inline-flex text-green-600 px-2 py-1 rounded mr-2">
                  <HandThumbUpIcon className="size-4 m-1" />
                  Recommended
                </span>
              )}
              {review.notRecommended && (
                <span className="bg-red-100 inline-flex text-red-600 px-2 py-1 mr-2 rounded">
                  <HandThumbDownIcon className="size-4 m-1" />
                  Not Recommended
                </span>
              )}
              {review.approved && (
                <span className="bg-gray-100 inline-flex text-gray-600 px-2 py-1 rounded mr-2">
                  <CheckCircleIcon className="size-4 m-1" />
                  Approved review
                </span>
              )}
              {review.topReview && (
                <span className="bg-gray-100 inline-flex text-gray-600 px-2 py-1 rounded">
                  <StarIcon className="size-4 m-1" />
                  Top Review
                </span>
              )}
            </div>
            <div>
              <h4 className="font-semibold">"{review.title}"</h4>
              <p className="text-gray-600">{review.description}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center mt-2 text-gray-500">
                <FlagIcon className="size-4 m-1" />
                Report
              </div>
              <div className="flex items-center mt-2">
                <button className="text-gray-600 flex items-center mr-4">
                  <ShareIcon className="size-4 m-1" />
                  Share
                </button>
                <button className="text-orange-500 font-medium border-2 py-1 px-2 flex items-center">
                  Helpful ({review.helpfulCount})
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex space-x-2 text-sm font-medium text-gray-400 ">
          {[...Array(3)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded hover:text-black`}
            >
              Page {index + 1}
            </button>
          ))}
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 hover:text-black">Page 23</button>
        </div>
        <div className="space-x-8 text-orange-500 font-medium">
          <button className="">Prev</button>
          <button className="">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
