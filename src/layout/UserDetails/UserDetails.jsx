import { useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
import { useEffect, useState } from "react";
import bg from '../../assets/image/abt.jpg'
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2, TbSquareRoundedNumber3, TbSquareRoundedNumber4, TbSquareRoundedNumber5, TbSquareRoundedNumber6, TbSquareRoundedNumber7, TbSquareRoundedNumber8 } from "react-icons/tb";


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
        const { id, firstName, age, birthDate, lastName, height, email, bloodGroup, gender, ssn, university, weight, image, username, phone ,address} = userInfo;
        console.log(userInfo);
        return (
            <div style={{ backgroundImage: `url(${bg})` }} className="  bg-cover bg-center ">
                <div className="h-screen w-screen bg-cover bg-center bg-[#062336c6] flex justify-center items-center">
                    <div className="w-[50%] h-[70%] relative bg-[#c7c3c3d5] shadow-xl rounded-md">
                        <div className="">
                            <img className="absolute -top-10 left-[calc(50%-40px)] bg-[#062336] rounded-full p-3 w-20 h-20" src={image} alt="" />
                            <h1 className=" relative text-center top-12 w-[20%] rounded-md mx-auto bg-white  text-[#062336]"><span className="font-extrabold">User ID:</span> {username}</h1>
                        </div>
                        <div className="h-full w-full absolute top-0 ">
                            <div className=" w-full h-[calc(100%-80px)] mt-20 grid grid-cols-1 md:grid-cols-2 rounded-b-md bg-green-200">
                                <div className="px-5 bg-[#325991] rounded-bl-md">
                                    <h1 className="text-xl font-bold text-center">Personal Information</h1>
                                    <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber1 /> <p>Name: {firstName} {lastName}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber2 /> <p>Age: {age}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber3 /> <p>Date Of Birth: {birthDate}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber4 /> <p>Blood Group: {bloodGroup}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber5 /> <p>Gender:{gender}</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber6 /> <p>Height: {height} cm</p>   </div>
                                    <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber7 /> <p>Weight: {weight} kg</p>   </div>

                                </div>
                                <div className="border-l-2 border-l-white bg-[#4072afda] rounded-br-md">
                                    <div className="px-5">
                                        <h1 className="text-xl font-bold text-center">Contact Information</h1>
                                        <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber1 /> <p>Email: {email}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber2 /> <p>Phone: {phone}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber3 /> <p>NID: {ssn}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber4 /> <p>Address: {address.address}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber5 /> <p>City: {address.city}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber6 /> <p>Postal Code: {address.postalCode}</p>   </div>
                                        <div className="flex text-white items-center gap-1 text-lg"><TbSquareRoundedNumber7 /> <p>State: {address.state}</p></div>

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