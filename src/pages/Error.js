import { Link } from 'react-router-dom';
import ErrorStyle from '../cssResources/wrappers/Error404';
import img from '../cssResources/images/not-found.svg';

const Error = () => {
    return (
        <ErrorStyle className='full-page'>
            <div>
                <img src={img} alt='404' />
                <h3>page not found</h3>
                <p>It seems the pages you are looking does not exist</p>
                <Link to='/'>Back Home</Link>
            </div>
        </ErrorStyle>
    );
};

export default Error;
