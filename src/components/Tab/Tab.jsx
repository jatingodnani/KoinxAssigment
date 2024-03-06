import { useState } from 'react';

function Tab() {
    const tabarr = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Teams", "Technicals"];
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div className='flex flex-col font-tenor-sans w-[80%]'>
            <div className='flex gap-4 mt-4 justify-between items-center w-full '>
                {tabarr.map((each, index) => (
                    <div key={index} className={`transition-0.5 ${index === currentTab ? 'text-blue font-bold' : 'text-gray-400 cursor-pointer'}`} onClick={() => setCurrentTab(index)}>
                        {each}
                    </div> 
                ))}
            </div>
            <hr className=' mt-2 text-gray w-[120%]'/>
        </div>
    );
}

export default Tab;
