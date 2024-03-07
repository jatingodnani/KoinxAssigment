import { Link } from "react-router-dom";

function Card({ symbol, small, percentagechange,price,sparkline }) {
   
    const percentageChangeNumber = typeof percentagechange === 'number' ? percentagechange : parseFloat(percentagechange);

    return (
        // <Link  className="no-underline">
        <Link  to={`/${symbol}`} className="no-underline cursor-pointer flex-col justify-center items-center border border-[##374255] shadow-md w-[262px]  rounded p-4 box-border text-black">
            <div className="flex w-full h-[30%] gap-2">
                <img src={small} className="w-[50px] rounded-[50%]" alt="phone" />
                <p className="font-ubuntu">{symbol}</p>
               
                <p className={`font-ubuntu p-2  text-[12px] text-center  rounded  ${percentageChangeNumber >= 0 ? 'bg-[#8fd68f]' : 'bg-[#ef7878]'}`}>{percentageChangeNumber && percentageChangeNumber.toFixed(2)}%</p>
            </div>
            <div className="w-full">
                <p className="font-bold font-ubuntu">{price}</p>
                <img className="w-[90%]" src={sparkline} alt="sparkline" />
            </div>
        </Link>
        // </Link>
    );
}
export default Card