import { useParams } from "react-router-dom";
import Attributes from "./Attributes";
import { useEffect, useState } from "react";
import { getTokendata } from "../../fetchapi/fetchapi";
import { arr } from "../../../data/data";

function CoinDetail() {
  const [data, setdata] = useState({});

  const { id } = useParams();
  async function getdata() {
    await getTokendata(id, setdata);
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="rounded-md  flex flex-col bg-white p-8 mb-4 item-center">
      <div className="w-full flex flex-col ">
        <h2 className="font-bold  font-tenor-sans">Performance</h2>
      </div>
      <div className="w-full flex flex-col ">
        <h2 className="font-bold  font-tenor-sans">Fundamentals</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-3 ">
          {arr.map((each) => (
            <Attributes key={each} name={each.name} value={each.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoinDetail;
