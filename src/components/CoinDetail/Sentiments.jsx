import React from "react";
import { FcBullish } from "react-icons/fc";
import { BsExclamationCircleFill } from "react-icons/bs";
import { option } from "../../../data/data";

function Sentiments() {
  
  return (
    <div className="w-full bg-white flex flex-col my-4 p-4 rounded-md">
      <div className="font-bold">
        <h2 className="font-ubuntu">Sentiments</h2>
        <h3 className="font-tenor-sans text-[#768396] flex item-center gap-2">
          Key Events
          <BsExclamationCircleFill />{" "}
        </h3>
      </div>
      <div className="flex overflow-x-hidden justify-center gap-2">
        {[1, 2].map((each) => (
          <Events key={each} />
        ))}
      </div>
      <div className="mt-4 flex flex-col w-full">
        <h4 className="font-tenor-sans text-[#768396]">
          Analytic Estimates <BsExclamationCircleFill />
        </h4>
        <div className="flex w-[50%] justify-between align-cente">
          <div className="w-[100px] h-[100px] rounded-[50%] bg-[#EBF9F4]  flex justify-center items-center">
            <span className="font-tenor-sans font-bold">70%</span>
          </div>
          <div className="flex flex-col ">
            {option.map((each) => (
              <div
                key={each}
                className="flex justify-center items-center gap-2 font-thin font-roboto"
              >
                <p>{each.name}</p>
                <div className="h-4 w-100px bg-red-500"></div>
                <p>{each.percentage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function Events() {
  return (
    <div className="w-[500px] bg-[#E8F4FD] flex justify-center  p-4 rounded-md gap-2">
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
