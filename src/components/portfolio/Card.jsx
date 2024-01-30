import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import data from "../../assets/data/portData";
import { useParams } from "react-router-dom";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const Card = () => {
  // console.log(useParams());

  const [portfolios, setPortfolios] = useState(data);
  const { id } = useParams(); // Assuming you're using React Router's useParams() hook
  const specifiedId = parseInt(id, 10); // Convert id to a number if needed
  // console.log(specifiedId);

  // Find the portfolio with the specified id
  const sPort = portfolios.find((portfolio) => portfolio.id === specifiedId);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Scroll to the top when the component mounts or when the page is refreshed
    scrollToTop();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <article className="mt-8 flex flex-col items-center">
      <div className="mb-4 md:mb-0 w-full mx-auto relative ">
        <div className="px-4 lg:px-0 lg:space-x-6">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            {sPort.title}
          </h2>
          <a
            href="#"
            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            {sPort.category} Project
          </a>
        </div>
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={100}
          defaultPositionY={200}
        >
          <TransformComponent>
            <div className="w-full flex items-center ">
              <img
                src={sPort.imgUrl || ""}
                className="object-cover lg:rounded"
                style={{ maxHeight: "40em", maxWidth: "100%" }}
                alt="Portfolio Image"
              />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-8 text-gray-700 text-lg leading-relaxed w-full lg:w-full">
          {/* ... Existing code ... */}
          {sPort.description}
          <br /> <br />
          {/* <p>This is an extra paragraph</p> */}
        </div>

        {/* <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img
                src={sPort?.imgUrl || ""} // Display image based on specified id
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
        </div> */}
      </div>

      <div className="flex items-center justify-between mt-4 md:w-1/2">
        {/* <div className="flex items-center space-x-2">
          <BiCommentDetail className="text-gray-600" />
          <span className="text-gray-600">15 comments</span>
        </div>
        <div className="flex items-center space-x-2 mt-8">
          <AiOutlineHeart className="text-red-500" />
          <span className="text-gray-600">120 likes</span>
        </div> */}
        <a
          href="/"
          className="text-green-700 inline-flex items-center justify-center"
        >
          <AiOutlineArrowLeft className="ml-2" />
          Back to Home
        </a>
      </div>
    </article>
  );
};

export default Card;
