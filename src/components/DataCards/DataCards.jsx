import useData from "../../Hooks/useData";
import DataCard from "./DataCard/DataCard";


const DataCards = () => {
    const data = useData();
    if (Object.keys(data) < 1) {
        return 'loading data'
    }
    else {
        const user = data.users;
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                {user.map((userData,index)=><DataCard key={index} userData={userData}></DataCard>)}
            </div>
        );
    }
};

export default DataCards;