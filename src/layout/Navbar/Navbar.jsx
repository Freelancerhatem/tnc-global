import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";


const Navbar = () => {
    const[active,setActive] = useState(true);
    useEffect(()=>{
        const handleScroll =()=>{
            const scrollValue=window.scrollY;
            if(scrollValue > 0)
            {

                setActive(false)
            }
            else{
                setActive(true)
            }
            
        };
        window.addEventListener('scroll',handleScroll);

        // clean the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[]);
    console.log(active)
    return (
        <div className="fixed w-screen z-50">
            <div className={`bg-white w-full  px-10 flex justify-end gap-3 ${active? 'translate-y-0  transition-all duration-300':'-translate-y-10 transition-all duration-300'}`}>
                    <h3>Follow us on</h3>
                    <div className="flex justify-center items-center gap-2 text-xl">
                        <p><FaFacebook/></p>
                        <p><IoLogoYoutube/></p>
                        <p><FaLinkedin/></p>
                    </div>
            </div>
            <div className={`h-14 text-white bg-[#062336] px-10 grid grid-cols-2 ${active? 'translate-y-0 transition-all duration-300':'-translate-y-7 transition-all duration-300'}`}>
                <div className=" flex items-center ">
                    <h1 className="text-2xl font-bold">Penguin</h1>
                </div>
                <div className=" flex items-center justify-end">
                    <nav className="flex items-center list-none gap-5">
                        <li>Home</li>
                        <li>About</li>
                        <li>Pages</li>
                        <li className="text-black bg-white px-4 py-2">Contacts</li>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;