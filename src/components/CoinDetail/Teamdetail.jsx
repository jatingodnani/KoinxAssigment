import { Team } from "../../../data/data";

function Teamdetail() {
  return (
    <div className="bg-white flex flex-col p-4 font-ubuntu mb-4 rounded-md">
      <div>
        <h2 className="font-bold font-tenor-sans">Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          aliquid veritatis nemo, quibusdam illum modi quos iste architecto nam
          labore? Vero illum facilis obcaecati at ad ipsam ex, doloremque ullam?
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          {Team.map((each) => (
            <div key={each.id} className="flex rounded-md gap-4 px-4 py-2 bg-[#a7b4bd]">
              <div className="flex flex-col">
                <img className="rounded" src={each.profile} />
               <div className="flex flex-col">
                <p className="text-black font-bold font-tenor-sans text-start">
                  {each.name}
                </p>
                {/* <p className="text-gray text-[14px] font-bold font-ubuntu  text-start">
                  {each.associated}
                </p> */}
            </div>
                
              </div>
              <div>
                <p className="text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat eius iste a iusto sed cupiditate sapiente inventore molestiae incidunt numquam 
                    unde facere, pariatur quod molestias repellendus, modi officia impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo vero expedita officiis sint fugit cum perspiciatis libero, magnam, suscipit ullam, ad explicabo? Repudiandae ipsa perferendis obcaecati 
                    maiores ea voluptas!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teamdetail;
