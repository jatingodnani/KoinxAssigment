import React from "react";

function Attributes({ attri }) {
  return (
    <div className="flex-col w-[70%]">
      <div className="flex justify-between items-center text-[14px] font-ubuntu text-[#768396]">
        <p>{attri}</p>
        <p className="text-[12px] font-bold text-black">value</p>
      </div>
      <hr className=" mt-2 text-gray w-[120%]" />
    </div>
  );
}

export default Attributes;
