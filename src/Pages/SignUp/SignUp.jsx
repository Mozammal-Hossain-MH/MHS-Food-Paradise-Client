import '../Login/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
// import toast from 'react-hot-toast';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';


const SignUp = () => {
    const { createUser, updateUsersProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // create a user
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUsersProfile(data.name)
                    .then(() => {
                        const user = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', user)
                            .then(res => {
                                console.log(res.data)
                                if (res.data.insertedId) {
                                    toast.success('Account created successfully');
                                    navigate('/');
                                    reset();
                                }
                            })

                    })

            })
            .catch(error => {
                console.log(error)
            })
    }

    // const handleSignUp = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     if (!email && !password) {
    //         toast.error('Please fill the Email and Password field')
    //         return;
    //     }

    //     console.log(name, email, password);
    //     // create a user
    //     createUser(email, password)
    //         .then(result => {
    //             console.log(result.user);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    return (
        <>
            <Helmet>
                <title>MHS | SignUp</title>
            </Helmet>
            <div className="loginbg py-28">
                <div className='max-w-screen-xl mx-auto p-10 md:p-16 lg:p-20 md:flex justify-between items-center shadow-large'>
                    <div className='flex md:block mb-8 justify-center w-full'>
                        <img src={'/authentication2.webp'} />
                    </div>
                    <div className='w-full px-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='font-bold text-3xl text-center mb-6'>Sign Up</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name="name" placeholder='Your Name' className="input input-bordered" />
                                {errors.name && <span className='text-red-600 text-xs mt-1'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder='Your Email' className="input input-bordered" />
                                {errors.email && <span className='text-red-600 text-xs mt-1'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 16, pattern: /(?=.*[A-Z])(?=.*[0-9])/ })} name="password" placeholder='Your Password' className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-600 text-xs mt-1'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600 text-xs mt-1'>Password should be at least 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600 text-xs mt-1'>Password should have not more than 16 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600 text-xs mt-1'>Password should have at least one uppercase and one number</span>}
                            </div>
                            <div className="form-control">
                                <input type="submit" className="btn mt-3 bg-[#D1A054] font-bold text-white hover:bg-[#D1c054]" value="Sign Up" />
                            </div>
                        </form>
                        <div className='text-center space-y-3 mt-3'>
                            <p className='text-[#D1A054]'><small>Already registered? <Link to={'/login'} className='link link-hover font-bold'>Go To Login</Link></small></p>
                            <p className='font-medium'>Or sign up with</p>
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

export default SignUp;