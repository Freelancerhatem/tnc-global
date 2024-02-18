import Lottie from "lottie-react";
import anim from '../../assets/animation/anim1.json'
import { BsClipboardDataFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { SiCountingworkspro } from "react-icons/si";
const About = () => {
    return (
        <div className=" bg-white mt-20 h-screen">
            <div className="text-center pt-10 ">
                <h1 className="text-black text-3xl">About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, illo?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 h-[60vh] ">
                <div className=" ">
                <Lottie animationData={anim} loop={true} autoPlay className="h-[80vh] relative"  />
                </div>
                <div className=" flex items-center justify-center gap-5">
                    <div>
                        <div className="text-3xl flex items-center font-semibold gap-2">
                            <p className=""><FaUsers/></p>
                            <h1>Total User</h1>
                        </div>
                        <div className="flex flex-col items-center text-3xl font-bold">
                            <p>30</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl flex items-center font-semibold gap-2">
                            <p className=""><BsClipboardDataFill/></p>
                            <h1>Total Data</h1>
                        </div>
                        <div className="flex flex-col items-center text-3xl font-bold">
                            <p>2000+</p>
                        </div>
                    </div>
                    <div>
                        <div className="text-3xl flex items-center font-semibold gap-2">
                            <p className=""><SiCountingworkspro/></p>
                            <h1>Hired</h1>
                        </div>
                        <div className="flex flex-col items-center text-3xl font-bold">
                            <p>20</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;