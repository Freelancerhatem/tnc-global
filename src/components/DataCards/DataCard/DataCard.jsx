
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';
import useAos from '../../../Hooks/useAos/useAos';
import { MdVerified } from "react-icons/md";
const DataCard = ({ userData }) => {
    const { id, image, firstName, lastName, age, weight, bloodGroup, company } = userData;
    const [active, setActive] = useState(false);
    useAos()
    return (
        <div data-aos-duration='700' data-aos='fade-up' onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className='relative'>
            <div className={`  bg-white  -z-0 py-5 rounded-md shadow-2xl ${active ? '' : ''}`}>
                <div className={`absolute   left-0 bottom-0   bg-gradient-to-t from-[#000000]  via-[#1c354d]  to-black ${active ? '   rounded-md  h-full  w-full duration-500 transition-all  z-10' : 'h-0 w-full transition-all   duration-500'}`}></div>
                <div className='z-30 relative'>
                    <div className={`w-20 h-20 relative rounded-full mx-auto p-4 my-2  transition-all duration-500 ${active ? 'bg-white' : 'bg-[#17253d]'}`}>
                        <img className={`w-full  h-full ${active ? '' : ''}`} src={image} alt="" />
                        <span className='absolute text-blue-600 text-xl right-1 bottom-1'><MdVerified/></span>
                    </div>
                    <div className={`text-center  text-lg font-semibold ${active ? 'text-white' : ''}`}>
                        <h2 className='text-xl'>{firstName} {lastName}</h2>
                        <h2 className={`text-xs text-gray-400  py-1 rounded-full w-[40%] mx-auto transition-all duration-500 ${active ? 'bg-white' : 'bg-[#17253d]'}`}>{company.title}</h2>
                    </div>
                    <div className={`flex  gap-2 my-4 items-center justify-evenly ${active ? 'text-white' : ''}`}>
                        <div className='flex flex-col items-center'>
                            <h2 className=' text-gray-400'>Age</h2>
                            <p className='text-xl font-bold'>{age}</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className=' text-gray-400'>Blood Group:</h2>
                            <p className='text-xl font-bold'>{bloodGroup}</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className=' text-gray-400'>Weight:</h2>
                            <p className='text-xl font-bold'>{weight} kg</p>
                        </div>

                    </div>
                    <Link to={`/user/${id}`} className='flex justify-center'><button className="flex  justify-center items-center gap-2 text-base px-4 text-white rounded-full hover:bg-[#4878ca]  py-2 bg-[#335da5] font-semibold text-center">Visit Profile<FaArrowAltCircleRight /></button></Link>
                </div>
            </div>
        </div>
    );
};
DataCard.propTypes = {
    userData: PropTypes.object
};
export default DataCard;
