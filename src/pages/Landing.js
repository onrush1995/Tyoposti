import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> App
                    </h1>
                    <p
                        style={{
                            textAlign: 'left',
                            fontSize: '8vmin'
                        }}
                    >
                        Own your company
                    </p>
                    <Link
                        style={{
                            fontSize: '3vmin'
                        }}
                        to='/register'
                        className='btn btn-hero'
                    >
                        Login/Register
                    </Link>
                </div>

                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    );
};

export default Landing;
