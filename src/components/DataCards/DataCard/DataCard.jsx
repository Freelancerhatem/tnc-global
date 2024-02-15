
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';
const DataCard = ({ userData }) => {
    const { id, image, firstName, lastName, email, phone } = userData;
    const [active, setActive] = useState(false)
    return (
        <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className='relative'>
            <div className={`  bg-white -z-0 py-5 rounded-md shadow-2xl ${active ? '' : ''}`}>
                <div className={`absolute  w-full left-0 bottom-0    ${active ? ' bg-gradient-to-t from-[#7ba7f3] via-[#7ba7f3]  to-transparent  rounded-md l h-full   duration-500 transition-all  z-10' : 'h-0 transition-all   duration-500'}`}></div>
                <div className='z-30 relative'>
                    <div className={`w-20 h-20 rounded-full mx-auto p-4 my-2  bg-[#7ba7f3] ${active?'bg-white':''}`}><img className={`w-full  h-full ${active?'':''}`} src={image} alt="" /></div>
                    <div className={`text-center text-lg font-semibold ${active?'text-white':''}`}><h2>{firstName} {lastName}</h2></div>
                    <div className={`flex flex-col gap-2 items-center ${active?'text-white':''}`}>
                        <h2>{email} </h2>
                        <h2>{phone}</h2>
                    </div>
                    <Link to={`/user/${id}`} className='flex justify-center'><button className="flex  justify-center items-center gap-2 text-base px-4 text-white hover:bg-[#4878ca] rounded-sm py-2 bg-[#335da5] font-semibold text-center">See More<FaArrowAltCircleRight /></button></Link>
                </div>
            </div>
        </div>
    );
};
DataCard.propTypes = {
    userData: PropTypes.object
};
export default DataCard;
