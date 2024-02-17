import { Link, useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
import { useEffect, useState } from "react";
import bg from '../../assets/image/abt.jpg'
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2, TbSquareRoundedNumber3, TbSquareRoundedNumber4, TbSquareRoundedNumber5, TbSquareRoundedNumber6, TbSquareRoundedNumber7, TbSquareRoundedNumber8 } from "react-icons/tb";
import { ImCross } from "react-icons/im";

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
        const { id, firstName, age, birthDate, lastName, height, email, bloodGroup, gender, ssn, university, weight, image, username, phone, address } = userInfo;
        console.log(userInfo);
        return (
            <div style={{ backgroundImage: `url(${bg})` }} className=" h-screen   bg-cover bg-center ">
                <div className="h-screen w-screen bg-cover bg-center bg-[#062336c6] flex pt-14 md:pt-0 justify-center md:items-center">
                    <div className="lg:w-[50%] w-[80%] lg:h-[70%] md:h-[56.5%]  relative md:bg-[#c7c3c3d5] shadow-xl rounded-md">
                        <Link to={'/'} className="absolute z-50 md:top-5 -top-5 md:right-5 right-0 text-white"><ImCross /></Link>
                        <div className="">
                            <img className="absolute -top-10 left-[calc(50%-40px)] bg-[#062336] rounded-full p-3 w-20 h-20" src={image} alt="" />
                            <h1 className=" relative text-center top-12 md:w-[20%] w-1/2 rounded-md mx-auto bg-white  text-[#062336]"><span className="font-extrabold">User ID:</span> {username}</h1>
                        </div>
                        <div className="h-full  w-full absolute top-0 ">
                            <div className=" w-full lg:h-[calc(100%-80px)] mt-20  grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 rounded-b-md">
                                <div className="px-5 bg-[#325991] md:rounded-bl-md rounded-md md:rounded-none py-5 md:py-0">
                                    <h1 className="md:text-xl  font-bold text-center">Personal Information</h1>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber1 /> <p>Name: {firstName} {lastName}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber2 /> <p>Age: {age}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs  md:text-lg"><TbSquareRoundedNumber3 /> <p>Date Of Birth: {birthDate}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber4 /> <p>Blood Group: {bloodGroup}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber5 /> <p>Gender:{gender}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber6 /> <p>Height: {height} cm</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber7 /> <p>Weight: {weight} kg</p>   </div>

                                </div>
                                <div className="md:border-l-2 md:border-l-white bg-[#4072afda] md:rounded-br-md rounded-md md:rounded-none">
                                    <div className="px-5 py-5 md:py-0">
                                        <h1 className="md:text-xl font-bold text-center">Contact Information</h1>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber1 /> <p>Email: {email}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber2 /> <p>Phone: {phone}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber3 /> <p>NID: {ssn}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber4 /> <p>Address: {address.address}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber5 /> <p>City: {address.city}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber6 /> <p>Postal Code: {address.postalCode}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-xs md:text-lg"><TbSquareRoundedNumber7 /> <p>State: {address.state}</p></div>

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