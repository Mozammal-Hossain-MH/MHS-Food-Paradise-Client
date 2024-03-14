import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../Hooks/useAuthContext';
import fb from '../../assets/icon/fb.png';
import gg from '../../assets/icon/gg.png';
import gh from '../../assets/icon/gh.png';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const { googleLogin } = useAuthContext();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(() => {
                        toast.success('You have successfully logged in')
                        navigate('/')
                    })

            })
    }

    return (
        <>
            <img className='btn w-12 h-12 mr-2 rounded-full p-2' src={fb} />
            <img onClick={handleGoogleLogin} className='btn w-12 h-12 mr-2 rounded-full p-2' src={gg} />
            <img className='btn w-12 h-12 mr-2 rounded-full p-2' src={gh} />
        </>
    );
};

export default SocialLogin;