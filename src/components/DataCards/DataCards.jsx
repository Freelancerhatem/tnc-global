import useAos from "../../Hooks/useAos/useAos";
import useData from "../../Hooks/useData";
import DataCard from "./DataCard/DataCard";


const DataCards = () => {
    useAos()
    const data = useData();
    if (Object.keys(data) < 1) {
        return 'loading data'
    }
    else {
        const user = data.users;
        
        return (
            <div className=" bg-[#8dabd9] mt-20 py-10 z-50">
                <h1 className="text-center font-bold text-2xl">All User</h1>
                <div data-aos={''} data-aos-duration='1000' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-2">

                    {user.map((userData, index) => <DataCard key={index} userData={userData}></DataCard>)}
                </div>
            </div>
        );
    }
};

export default DataCards;