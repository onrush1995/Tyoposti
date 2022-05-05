import { Link } from 'react-router-dom';
import Wrapper from '../cssResources/wrappers/ErrorPage';

const Error = () => {
    return (
        <Wrapper>
            <div className='scene'>
                <div className='box'>
                    <div className='box__face front'>4</div>
                    <div className='box__face back'>0</div>
                    <div className='box__face right'>4</div>
                    <div className='box__face left'>0</div>
                    <div className='box__face top'>0</div>
                    <div className='box__face bottom'>0</div>
                </div>
                <div className='shadow' />
            </div>
            <div className='desc'>
                <h2>Ooops page not found!</h2>
                <Link to='/'>Back Home</Link>
            </div>
        </Wrapper>
    );
};

export default Error;
