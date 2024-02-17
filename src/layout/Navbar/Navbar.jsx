import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [active, setActive] = useState(true);
    const [menuBar, setMenuBar] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            if (scrollValue > 0) {

                setActive(false)
            }
            else {
                setActive(true)
            }

        };
        window.addEventListener('scroll', handleScroll);

        // clean the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(active)
    return (
        <div className="fixed w-screen z-50">
            <div className={`fixed pt-20  ${active? ' bg-white':'bg-[#062336]'} z-0 ${menuBar ? 'translate-x-0 h-screen w-56 transition-all duration-500 left-0 right-0' : '-translate-x-32 transition-all duration-500 h-screen w-20 '}`}>
                <div className={`w-full h-6   absolute  flex justify-end  ${active?'p-2 top-20 right-0':'top-14 right-2'}`}><button onClick={() => setMenuBar(false)} className={`${active?'':'text-white'}`}><ImCross></ImCross></button></div>
                <div className=" flex items-center justify-start ">
                    <nav className={`flex flex-col items-center list-none gap-5 ${active ? 'text-[#062336]' : 'text-white'}`}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pages</li>
                        <li className={` px-4 py-2 ${active ? ' bg-[#062336] text-white' : 'text-black bg-white'}`}>Contacts</li>
                    </nav>
                </div>
            </div>
            <div className={`bg-white w-full h-6 md:px-10 px-2 flex justify-end gap-3 ${active ? 'translate-y-0  transition-all duration-500' : '-translate-y-10 transition-all duration-1000'}`}>
                <h3>Follow us on</h3>
                <div className="flex justify-center items-center gap-2 text-xl">
                    <p><FaFacebook /></p>
                    <p><IoLogoYoutube /></p>
                    <p><FaLinkedin /></p>
                </div>
            </div>
            <div className={`h-14 text-white bg-[#062336]  md:px-10 grid grid-cols-2 ${active ? 'translate-y-0 transition-all  duration-700' : '-translate-y-7 transition-all bg-white duration-700'}`}>
                <div className=" flex items-center ">
                    <button onClick={() => setMenuBar(true)} className={`p-2 ${active ? 'text-white' : 'text-[#062336]'}`}>{!menuBar ? <GiHamburgerMenu /> : ''}</button>
                    <h1 className={`md:text-2xl font-bold ${active ? '' : 'text-[#062336]'}`}>Penguin</h1>
                </div>
                <div className=" lg:flex items-center justify-end hidden">
                    <nav className={`flex items-center list-none gap-5 ${active ? '' : 'text-[#062336]'}`}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pages</li>
                        <li className={` px-4 py-2 ${active ? 'text-black bg-white' : 'bg-[#062336] text-white'}`}>Contacts</li>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;