import phone from "../../assets/phone.png";
import phone1 from "../../assets/phone1.png";
import { FaArrowRight } from "react-icons/fa";
function About() {
  return (
    <div className="flex flex-col p-4 rounded-md font-roboto bg-white mb-3">
      <h3 className="flex-bol font-roboto">About Bitcoin</h3>
      <div className="flex  flex-col">
        <h4 className="font-bold text-[15px]">What is Bitcoin</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero
          tempore aliquam ut maiores. Voluptatem ipsa laboriosam doloribus hic
          omnis. Sed nemo ex cupiditate consequatur laudantium libero
          voluptatem, animi accusamus.
        </p>
      </div>
      <hr className=" mt-2 text-gray w-[100%]" />
      <div className="flex  flex-col">
        <h4 className="font-bold text-[15px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          aliquam alias impedit delectus eos aspernatur facere architecto
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero
          tempore aliquam ut maiores. Voluptatem ipsa laboriosam doloribus hic
          omnis. Sed nemo ex cupiditate consequatur laudantium libero
          voluptatem, animi accusamus. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptas tempore qui deserunt, doloribus asperiores
          dolor perferendis. Nobis consectetur totam eius accusantium vero
          voluptas quo. Unde quo dolores labore possimus rerum.
        </p>
      </div>
      <hr className=" mt-2 text-gray w-[100%]" />
      <div className="flex  flex-col">
        <h4 className="font-bold text-[18px]">Already Holding Bitcoin?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero
          tempore aliquam ut maiores. Voluptatem ipsa laboriosam doloribus hic
          omnis. Sed nemo ex cupiditate consequatur laudantium libero
          voluptatem, animi accusamus. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptas tempore qui deserunt, doloribus asperiores
          dolor perferendis. Nobis consectetur totam eius accusantium vero
          voluptas quo. Unde quo dolores labore possimus rerum.
        </p>
      </div>

      <div className=" flex w-full  gap-4 mb-2 flex-col lg:flex-row">
        <div className="flex  h-32 rounded-md   items-center gap-4  p-4 bg-[#39d572] text-roboto lg:w-[400px]">
          <img src={phone1} className="h-full object-cover " />
          <div className="flex flex-col mb-4">
            <h3 className="font-roboto font-bold text-white w-[80%] text-[20px]">
              Calculate your Profit
            </h3>
            <div className="bg-white w-[60%] p-2 text-[14px] font-bold  flex items-center gap-2 text-black  border-0 rounded-md cursor-pinter">
              Check Now
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div
          className="flex 
        rounded-md  h-32 items-center gap-4  p-4 bg-[#ea723b] text-roboto lg:w-[400px]"
        >
          <img src={phone} className="h-full object-cover " />
          <div className="flex flex-col mb-4">
            <h3 className="font-roboto font-bold text-white w-[80%] text-[20px]">
              Calculate your Fund libality
            </h3>
            <div className="bg-white w-[60%] p-2 text-[14px] font-bold  flex items-center gap-2 text-black  border-0 rounded-md cursor-pinter">
              Check Now
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <hr className=" mt-2 text-gray w-[100%]" />
      <div className="">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, sed
          minima voluptate consequatur expedita odio pariatur debitis explicabo
          sequi eos qui dolorem unde rem voluptatibus veniam praesentium numquam
          eveniet aspernatur.
        </p>
      </div>
    </div>
  );
}

export default About;
