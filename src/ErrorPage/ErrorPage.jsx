import { FaHome } from 'react-icons/fa';
import error from '../assets/404.gif'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen md:space-y-0'>
                <div>
                    <div className='flex justify-center'>
                        <img className='w-1/4' src={error} />
                    </div>
                    <p className='font-bold text-2xl px-3 text-center my-6'>Please let us know how you get this <span className='text-red-700'>Error</span> so that we can fix this</p>
                    <div className='flex justify-center'>
                        <Link to={'/'}>
                            <button className="btn w-[180px] mt-5 bg-gradientButton text-white">Back to home <FaHome /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;