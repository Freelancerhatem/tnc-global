
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";
const DataCard = ({ userData }) => {
    const { id, image, firstName, lastName, email, phone } = userData;
    return (
        <div>
            
            <div className='  bg-white py-5 rounded-md shadow-2xl'>
                <div className='w-20 h-20 rounded-full mx-auto p-4 my-2  bg-fuchsia-500'><img className='w-full  h-full' src={image} alt="" /></div>
                <div className='text-center text-lg font-semibold'><h2>{firstName} {lastName}</h2></div>
                <div className='flex flex-col gap-2 items-center'>
                    <h2>{email} </h2>
                    <h2>{phone}</h2>
                </div>
                <Link to={`/user/${id}`} className='flex justify-center'><button className="flex  justify-center items-center gap-2 text-base px-4 text-white hover:bg-fuchsia-400 rounded-sm py-2 bg-fuchsia-500 font-semibold text-center">See More<FaArrowAltCircleRight/></button></Link>
            </div>
        </div>
    );
};
DataCard.propTypes = {
    userData: PropTypes.object
};
export default DataCard;
