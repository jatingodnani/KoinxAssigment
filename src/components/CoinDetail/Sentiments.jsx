import React from "react";
import { FcBullish } from "react-icons/fc";
import { BsExclamationCircleFill } from "react-icons/bs";
import { option } from "../../../data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function Sentiments() {
  return (
    <div className=" bg-white flex flex-col my-4 p-4 rounded-md">
      <div className="font-bold">
        <h2 className="font-ubuntu">Sentiments</h2>
        <h3 className="font-tenor-sans text-[#768396] flex item-center gap-2">
          Key Events
          <BsExclamationCircleFill />{" "}
        </h3>
      </div>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((each) => (
          <div className="w-full" key={each}>
            <Events />
          </div>
        ))}
      </Slider>
      <div className="mt-4 flex flex-col w-full">
        <h4 className="font-tenor-sans text-[#768396]">
          Analytic Estimates <BsExclamationCircleFill />
        </h4>
        <div className="flex w-full items-center border-box gap-5">
          <div className="w-[150px] h-[150px] rounded-[50%] bg-[#EBF9F4]  flex justify-center items-center">
            <span className="font-tenor-sans font-bold text-3xl text-[#00B386]">
              70%
            </span>
          </div>
          <div className="flex flex-col font-ubuntu w-[200px] items-start">
            <div className="flex justify-center items-center gap-2 font-thin font-roboto">
              <p className="text-[12px]">BUY</p>
              <div className={`h-2 rounded   bg-green-500 w-[150px]`}></div>
              <p className="text-[12px]">60%</p>
            </div>
            <div className="flex justify-center items-center gap-2 font-thin font-roboto">
              <p className="text-[12px]">HOLD</p>
              <div className={`h-2 w-[75px]  rounded bg-gray `}></div>
              <p className="text-[12px]">30%</p>
            </div>
            <div className="flex justify-center items-center gap-2 font-thin font-roboto">
              <p className="text-[12px]">Sell</p>
              <div className={`h-2 rounded w-[50px] bg-red-500`}></div>
              <p className="text-[12px]">10%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Events() {
  return (
    <div className=" bg-[#E8F4FD] flex justify-center  p-4 rounded-md gap-2 mx-2">
      <FcBullish className="text-3xl mt-4" />
      <div className="w-full ">
        <h4 className="font-bold font-ubuntu text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quidem modi dolore inventore id recusandae magnam nam officia quaerat
          ducimus, omnis
        </h4>
        <p className="text-[#768396] font-tenor-sans font-light text-[15px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          quaerat unde perspiciatis laboriosam voluptatem laborum laudantium,
          sapiente obcaecati amet natus ipsam, dolorem quia ipsa in autem nobis.
          Voluptatem, neque facilis! Lorem ipsum dolor, sit{" "}
        </p>
      </div>
    </div>
  );
}

export default Sentiments;
