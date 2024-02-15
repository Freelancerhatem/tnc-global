
import Navbar from "../layout/Navbar/Navbar";
import DataCards from "../components/DataCards/DataCards";
import Banner from "../layout/Banner/Banner";


const HomeLayout = () => {
    
    return (
        <div className="bg-gray-100">
            <Navbar></Navbar>
            <Banner></Banner>
            <DataCards></DataCards>
            {/* footer */}
        </div>
    );
};

export default HomeLayout;