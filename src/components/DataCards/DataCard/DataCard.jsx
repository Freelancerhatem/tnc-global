
import PropTypes from 'prop-types';
const DataCard = ({userData}) => {
    const{id} = userData;
    return (
        <div>
            {id}
        </div>
    );
};
DataCard.propTypes = {
   userData:PropTypes.object 
};
export default DataCard;
