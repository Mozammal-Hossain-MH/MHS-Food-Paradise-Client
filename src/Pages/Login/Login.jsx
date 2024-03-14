import './Login.css'
import loginImg from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.state?.from?.pathname;

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // login using firebase
        login(email, password)
        .then(result => {
            console.log(result.user);
            toast.success('You have successfully logged in')
            navigate(path ? path : '/');
            e.target.reset();
        })
        .catch(error => {
            console.log(error.message);
            if(error.message === 'Firebase: Error (auth/invalid-credential).'){
               toast.error('Create an account before logging in again') 
            }
            
        })
    }

    const handleValidateCaptcha = e => {
        const captchaValue = e.target.value;
        if (validateCaptcha(captchaValue)) {
            setDisabled(false);
        }

        else {
            setDisabled(true);
        }
    }

    return (
        <>
        <Helmet>
            <title>MHS | Login</title>
        </Helmet>
        <div className="loginbg py-28">
            <div className='max-w-screen-xl mx-auto p-10 md:p-20 md:flex justify-around items-center shadow-large'>
                <div className='flex md:block mb-8 justify-center w-full'>
                    <img src={loginImg} />
                </div>
                <div className='w-full px-5'>
                    <form onSubmit={handleLogin}>
                        <h2 className='font-bold text-3xl text-center mb-6'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder='Your Email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder='Your Password' className="input input-bordered" />
                        </div>
                        <div className="form-control my-3">
                            < LoadCanvasTemplate />
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder='Type The Text Above' className="input input-bordered my-2" />
                        </div>
                        <div className="form-control">
                            <input type="submit" disabled={disabled} className="btn bg-[#D1A054] font-bold text-white hover:bg-[#D1c054]" value="Login" />
                        </div>
                    </form>
                    <div className='text-center space-y-3 mt-3'>
                        <p className='text-[#D1A054]'><small>New here? <Link to={'/sign-up'} className='link link-hover font-bold'>Create New Account</Link></small></p>
                        <p className='font-medium'>Or sign in with</p>
                        <div className='flex justify-center'>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;