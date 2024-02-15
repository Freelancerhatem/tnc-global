
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DataCard = ({ userData }) => {
    const { id, image, firstName, lastName, email, phone } = userData;
    return (
        <div>
            {id}
            <div className='  bg-white rounded-md shadow-2xl'>
                <div className='w-14 h-14 rounded-full mx-auto py-2 my-2  bg-white'><img className='w-full  h-full' src={image} alt="" /></div>
                <div className='text-center text-lg font-semibold'><h2>{firstName} {lastName}</h2></div>
                <div className='flex gap-2 justify-center'>
                    <h2>{email} </h2>
                    <h2>{phone}</h2>
                </div>
                <Link to={`/user/${id}`}><div className='flex justify-center'><button className="btn btn-xs font-semibold text-center">See More</button></div></Link>
            </div>
        </div>
    );
};
DataCard.propTypes = {
    userData: PropTypes.object
};
export default DataCard;
