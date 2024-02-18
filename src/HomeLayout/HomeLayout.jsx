
import Navbar from "../layout/Navbar/Navbar";
import DataCards from "../components/DataCards/DataCards";
import Banner from "../layout/Banner/Banner";
import Footer from "../layout/Footer/Footer";
import About from "../layout/About/About";


const HomeLayout = () => {
    
    return (
        <div className="bg-gray-100">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <DataCards></DataCards>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;