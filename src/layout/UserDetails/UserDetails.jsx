import { useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
import { useEffect, useState } from "react";
import bg from '../../assets/image/abt.jpg'


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
        const { id, firstName, lastName, email, ssn, university, weight, image } = userInfo;
        console.log(userInfo);
        return (
            <div style={{ backgroundImage: `url(${bg})` }} className="h-screen w-screen bg-cover bg-center  flex justify-center items-center">
                <div className="h-screen w-screen bg-cover bg-center bg-[#062336c6] flex justify-center items-center"> 
                    <div className="w-[50%] h-[70%] relative bg-[#062336d5] shadow-xl rounded-lg">
                        <div className="">
                            <img className="absolute -top-10 left-[calc(50%-40px)] bg-[#062336] rounded-full p-3 w-20 h-20" src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default UserDetails;