import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { getTrendingToken } from "../../fetchapi/fetchapi";
import image from "../../assets/Frame.svg";

function Rightbar() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrendingToken(setTrending);
  }, []);
  console.log(trending);
  return (
    <div className="w-full flex-col gap-4 ">
      <div className="bg-[#0052FE] flex justify-center items-center rounded-md p-4 text-white box-border px-20 max-w-xl mx-auto">
        <div className="flex-col gap-2 flex">
          <h3 className="text-center">GET Started With KoinX For Free</h3>
          <p className=" text-center text-[14px]">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
          <img src={image} alt="" />
          <div className="bg-white  p-2 text-[14px] font-bold  flex items-center justify-center gap-2 text-black  border-0 rounded-md cursor-pinter ">
            Check Now
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="mt-5  flex-col  bg-white items-center rounded-md justify-center p-4 box-border max-w-xl mx-auto">
        <h3 className="font-tenor-sans font-bold text-center">
          Trending Coin(24h)
        </h3>
        <div className="p-4 box-border flex-col gap-6">
          {trending.slice(0, 3).map((each) => (
            <div
              key={each}
              className={`mb-2 flex items-center gap-2 justify-between`}
            >
              <div className="flex items-center gap-2">
                <img
                  src={each.item.small}
                  className="rounded-[50%] w-12"
                  alt="coin"
                />
                <p className="text-[14px]">
                  {each.item.name} ({each.item.symbol})
                </p>
              </div>
              <p
                className={`p-2  rounded mb-2 flex items-center gap-2 ${
                  parseFloat(each.item.data.price_change_percentage_24h.inr) < 0
                    ? "bg-red-200"
                    : "bg-green-200"
                }`}
              >
                {parseFloat(
                  each.item.data.price_change_percentage_24h.inr
                ).toFixed(2)}
                %
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
