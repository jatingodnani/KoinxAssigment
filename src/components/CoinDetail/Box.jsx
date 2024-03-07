import Attributes from "./Attributes";

function CoinDetail() {
  const arr = [
    "Bitcoin Price",
    "Market Cap",
    "24h high",
    "Market Cap Dominance",
    "",
    "Volume",
    "All Time High",
    "All Time Low",
  ];
  return (
    <div className="rounded-md  flex flex-col bg-white p-8 mb-4 item-center">
      <div className="w-full flex flex-col ">
        <h2 className="font-bold  font-tenor-sans">Performance</h2>
      </div>
      <div className="w-full flex flex-col ">
        <h2 className="font-bold  font-tenor-sans">Fundamentals</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-3 ">
          {arr.map((each) => (
            <Attributes key={each} attri={each} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoinDetail;
