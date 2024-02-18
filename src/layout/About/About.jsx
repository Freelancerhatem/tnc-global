/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import anim from '../../assets/animation/anim1.json'
import { BsClipboardDataFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { SiCountingworkspro } from "react-icons/si";
const About = () => {
    return (
        <div className=" bg-white mt-20 ">
            <div className="text-center pt-10 ">
                <h1 className="text-black text-3xl">About us</h1>
                <p>Are you in search of a skilled individual? Let's take a closer look at our user profile.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:h-[60vh] ">
                <div className=" ">
                <Lottie animationData={anim} loop={true} autoPlay className="md:h-[80vh] relative"  />
                </div>
                <div className=" flex flex-col md:flex-row items-center justify-center md:gap-5">
                    <div>
                        <div className="lg:text-3xl md:text-xl flex items-center font-semibold gap-2">
                            <p className=""><FaUsers/></p>
                            <h1>Total User</h1>
                        </div>
                        <div className="flex flex-col items-center text-3xl font-bold">
                            <p>30</p>
                        </div>
                    </div>
                    <div>
                        <div className="lg:text-3xl md:text-xl flex items-center font-semibold gap-2">
                            <p className=""><BsClipboardDataFill/></p>
                            <h1>Total Data</h1>
                        </div>
                        <div className="flex flex-col items-center text-3xl font-bold">
                            <p>2000+</p>
                        </div>
                    </div>
                    <div>
                        <div className="lg:text-3xl md:text-xl flex items-center font-semibold gap-2">
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