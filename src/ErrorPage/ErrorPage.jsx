import error from '../assets/404.gif'

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center h-screen space-y-12 md:space-y-0'>
                <img className='w-1/2' src={error} />
                <p className='font-bold text-2xl px-3 text-center'>Please let us know how you get this <span className='text-red-700'>Error</span> so that we can fix this</p>
            </div>
        </div>
    );
};

export default ErrorPage;