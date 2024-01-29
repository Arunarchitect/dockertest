import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import data from "../../assets/data/portData";

const Card = () => {
  const [portfolios, setPortfolios] = useState(data);
  const specifiedId = 3; // Replace with the specific id you want to display

  // Find the portfolio with the specified id
  const specifiedPortfolio = portfolios.find(portfolio => portfolio.id === specifiedId);

  return (
    <article className="mt-8">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            Search
          </h2>
          <a
            href="#"
            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            Search2
          </a>
        </div>
        <img
          src={specifiedPortfolio?.imgUrl || ''} // Display image based on specified id
          className="w-full object-cover lg:rounded"
          style={{ height: "28em" }}
          alt="Portfolio Image"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* ... Existing code ... */}

        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img
                src={specifiedPortfolio?.imgUrl || ''} // Display image based on specified id
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="Author"
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm">Author</p>
                <p className="font-semibold text-gray-600 text-xs"> Editor </p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
              Modelflick writes about architecture and planning
            </p>
            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Follow
              <AiOutlineHeart className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 md:w-1/2">
        <div className="flex items-center space-x-2">
          <BiCommentDetail className="text-gray-600" />
          <span className="text-gray-600">15 comments</span>
        </div>
        <div className="flex items-center space-x-2 mt-8">
          <AiOutlineHeart className="text-red-500" />
          <span className="text-gray-600">120 likes</span>
        </div>
        <a
          href="/"
          className="text-green-700 inline-flex items-center justify-center"
        >
          Back to Blogs
          <AiOutlineArrowRight className="ml-2" />
        </a>
      </div>
    </article>
  );
};

export default Card;
