import { Link, useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
import { useEffect, useState } from "react";
import bg from '../../assets/image/abt.jpg'
import { ImCross } from "react-icons/im";
import { IoPersonCircleSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaTransgender } from "react-icons/fa6";
import { GiBodyHeight, GiPostOffice } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { GiCityCar } from "react-icons/gi";
import { FaMountainCity } from "react-icons/fa6";
import { BiSolidIdCard } from "react-icons/bi";
import { MdOutlinePhone } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";


const UserDetails = () => {
    const data = useData();
    const { userId } = useParams();
    const [userInfo, setInfo] = useState({})


    useEffect(() => {
        const usersData = data?.users?.find(userData => userData.id == userId);
        setInfo(usersData)
    }, [data?.users, userId])
    if (userInfo == undefined || Object.keys(userInfo) == 0) {
        return 'loading'
    }
    else {
        const {  firstName, age, birthDate, lastName, height, email, bloodGroup, gender, ssn, weight, image, username, phone, address } = userInfo;
        console.log(userInfo);
        return (
            <div style={{ backgroundImage: `url(${bg})` }} className=" h-screen   bg-cover bg-center ">
                <div className="h-screen w-screen bg-cover bg-center bg-[#062336c6] flex pt-14 md:pt-0 justify-center md:items-center">
                    <div className="lg:w-[50%] w-[80%] lg:h-[70%] md:h-[56.5%]  relative md:bg-white shadow-xl rounded-md">
                        <Link to={'/'} className="absolute z-50 md:top-5 -top-5 md:right-5 right-0 text-[#0a0a0a]"><ImCross /></Link>
                        <div className="">
                            <img className="absolute -top-10 left-[calc(50%-40px)] bg-[#062336] rounded-full p-3 w-20 h-20" src={image} alt="" />
                            <h1 className=" relative text-center top-12 md:w-[30%] lg:w-[20%] w-1/2 text-xs md:text-base rounded-md mx-auto bg-[#062336]  text-white"><span className="font-extrabold">User ID:</span> {username}</h1>
                        </div>
                        <div className="h-full  w-full absolute top-0 ">
                            <div className=" w-full lg:h-[calc(100%-80px)] mt-20  grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 rounded-b-md">
                                <div className="px-5 bg-[#325991] md:rounded-bl-md rounded-md md:rounded-none py-5 md:py-0">
                                    <h1 className="md:text-xl  font-bold text-center">Personal Information</h1>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><IoPersonCircleSharp /> <p>Name: {firstName} {lastName}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><GrUserManager /> <p>Age: {age}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs  md:text-lg"><BsCalendar2DateFill /> <p>Date Of Birth: {birthDate}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><BiSolidDonateBlood /> <p>Blood Group: {bloodGroup}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><FaTransgender /> <p>Gender:{gender}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><GiBodyHeight /> <p>Height: {height} cm</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><GiWeight /> <p>Weight: {weight} kg</p>   </div>

                                </div>
                                <div className="md:border-l-2 md:border-l-white bg-[#4072afda] md:rounded-br-md rounded-md md:rounded-none">
                                    <div className="px-5 py-5 md:py-0">
                                        <h1 className="md:text-xl font-bold text-center">Contact Information</h1>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><MdEmail className="" /> <p>Email: {email}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><MdOutlinePhone /> <p>Phone: {phone}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><BiSolidIdCard /> <p>NID: {ssn}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><FaRegAddressCard /> <p>Address: {address.address}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><FaMountainCity /> <p>City: {address.city}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><GiPostOffice /> <p>Postal Code: {address.postalCode}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><GiCityCar /> <p>State: {address.state}</p></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default UserDetails;