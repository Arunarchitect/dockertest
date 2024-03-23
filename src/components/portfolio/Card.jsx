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
    scrollToTop();
  }, [location.pathname]);


  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="mb-4 flex flex-col md:flex-row w-full mx-auto relative">
        <div className="px-4  md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 leading-tight">
            {sPort.title}
          </h2>
          <h3 className=" text-green-700 inline-flex items-center justify-center mb-2">
            {sPort.category} Project
          </h3>
          <br />
          <h3 className=" text-blue-700 inline-flex items-center justify-center mb-2">
            Status: {sPort.status} 
          </h3>

          <br />
          <h4 className="text-xl font-bold mb-1">
            Location:
            <a href="" className="text-blue-500 hover:underline ml-2">
              {sPort.location}
            </a>
          </h4>
          <h3>Client: {sPort.client}</h3>
          <h3>
            Job Role:
            {sPort.design.length > 0 && (
              <span>
                {sPort.design.map((designer, index) => (
                  <span key={index}>
                    {index > 0 && ", "}
                    {designer}
                  </span>
                ))}
              </span>
            )}
          </h3>
          <h3>
   
          </h3>

          <h3 className="text-xl font-bold mb-2">Design Philosophy:  <p className="text-sm font-light mb-1">{sPort.phil}</p></h3>
        </div>
        <div className="md:w-1/2 flex items-center">
          <img
            src={sPort.imgUrl || ""}
            className="object-cover lg:rounded"
            style={{ maxHeight: "40em", maxWidth: "100%" }}
            alt="Portfolio Image"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-3 text-gray-700 text-sm leading-relaxed w-full lg:w-full">
          {/* ... Existing code ... */}
          <h4>{sPort.description}</h4>
          
          <br /> <br />
          {/* <p>This is an extra paragraph</p> */}
        </div>
      </div>

      <div className="flex  items-center justify-between mt-4 md:w-full">
        <a
          href="/"
          className="text-green-700 inline-flex items-center justify-center"
        >
          <AiOutlineArrowLeft className="ml-0" />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Card;
