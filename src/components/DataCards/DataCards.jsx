import { useState } from "react";
import useAos from "../../Hooks/useAos/useAos";
import useData from "../../Hooks/useData";
import DataCard from "./DataCard/DataCard";


const DataCards = () => {
    const [seeData, setData] = useState(6)
    useAos()
    const data = useData();
    if (Object.keys(data) < 1) {
        return 'loading data'
    }
    else {
        const user = data.users;

        return (
            <div className=" bg-[#d5e5fe] mt-20 py-10 z-50">
                <h1 className="text-center font-bold text-2xl">All User</h1>
                <div data-aos={''} data-aos-duration='1000' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-2">

                    {user.slice(0, seeData).map((userData, index) => <DataCard key={index} userData={userData}></DataCard>)}
                </div>
                <div className="flex justify-center items-center">
                    {seeData !== user.length ?
                        <button onClick={()=>setData(user.length)} className="relative inline-flex items-center justify-center p-4 md:px-32 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#335da5] rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#335da5] group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-[#335da5] transition-all duration-300 transform group-hover:translate-x-full ease">See All</span>
                        <span className="relative invisible">Button Text</span>
                        </button>
                        :
                        <button onClick={()=>setData(6)} className="relative inline-flex items-center justify-center p-4 md:px-32 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#335da5] rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#335da5] group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-[#335da5] transition-all duration-300 transform group-hover:translate-x-full ease">See Less</span>
                        <span className="relative invisible">Button Text</span>
                        </button>
                    }
                </div>
            </div>
        );
    }
};

export default DataCards;