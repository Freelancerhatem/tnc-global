
import Navbar from "../layout/Navbar/Navbar";
import DataCards from "../components/DataCards/DataCards";
import Banner from "../layout/Banner/Banner";
import Footer from "../components/DataCards/Footer/Footer";


const HomeLayout = () => {
    
    return (
        <div className="bg-gray-100">
            <Navbar></Navbar>
            <Banner></Banner>
            <DataCards></DataCards>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;