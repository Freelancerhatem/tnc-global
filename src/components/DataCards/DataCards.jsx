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
                <div>
                    {seeData!== user.length?
                       <div className="flex justify-center items-center  w-32 mx-auto cursor-pointer"  onClick={() => setData(user.length)}>{seeData!==user.length ?<p className="btn ">See More</p>:'' }</div> 
                        :
                       <div className="flex justify-center items-center"><button className="btn text-center flex justify-center items-center " onClick={() => setData(6)}>See Less</button></div> 
                    }
                </div>
            </div>
        );
    }
};

export default DataCards;