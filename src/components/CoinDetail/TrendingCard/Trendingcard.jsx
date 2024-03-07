import { useEffect } from "react";
import { useState } from "react";
import { getTrendingToken } from "../../../fetchapi/fetchapi";
import Card from "./Card.jsx";
function Trendingcard() {
  const [trending, setTrending] = useState([]);
  console.log(trending);
  useEffect(() => {
    getTrendingToken(setTrending);
  }, []);

  return (
    <div className="box-border p-6 flex-col font-tenor-sans bg-white">
      <div className="">
        <h2>You may Also Like This</h2>
        <div className="flex gap-4 overflow-auto w-auto">
          {trending.map((each) => (
            <Card
              key={each}
              percentagechange={each.item.data.price_change_percentage_24h.inr}
              symbol={each.item.symbol}
              small={each.item.small}
              price={each.item.data.price}
              sparkline={each.item.data.sparkline}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h2>TrendingCoing</h2>
        <div className="flex gap-4 overflow-auto w-auto">
          {trending.map((each) => (
            <Card
              key={each}
              percentagechange={each.item.data.price_change_percentage_24h.inr}
              symbol={each.item.symbol}
              small={each.item.small}
              price={each.item.data.price}
              sparkline={each.item.data.sparkline}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trendingcard;
