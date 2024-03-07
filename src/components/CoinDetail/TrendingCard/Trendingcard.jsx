import { useEffect } from "react";
import { useState } from "react";
import { getTrendingToken } from "../../../fetchapi/fetchapi";
import Card from "./Card.jsx";
import Slider from "react-slick";
var settings = {
  
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  // centerMode: true,
};
function Trendingcard() {
  const [trending, setTrending] = useState([]);
  console.log(trending);
  useEffect(() => {
    getTrendingToken(setTrending);
  }, []);

  return (
    <div className="box-border p-6 flex flex-col font-tenor-sans bg-white overflow-hidden">
      <div className="flex flex-col">
        <h2>You may Also Like This</h2>
        <Slider {...settings}>
          {trending.map((each) => (
            <div key={each} className="w-full">
              <Card
                percentagechange={
                  each.item.data.price_change_percentage_24h.inr
                }
                symbol={each.item.symbol}
                small={each.item.small}
                price={each.item.data.price}
                sparkline={each.item.data.sparkline}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-4">
        <h2>TrendingCoin</h2>
        <Slider {...settings}>
          {trending.map((each) => (
            <div key={each} className="w-full">
              <Card
                percentagechange={
                  each.item.data.price_change_percentage_24h.inr
                }
                symbol={each.item.symbol}
                small={each.item.small}
                price={each.item.data.price}
                sparkline={each.item.data.sparkline}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Trendingcard;