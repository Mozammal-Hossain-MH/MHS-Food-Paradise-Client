import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import contact from '../../assets/contact/banner.jpg'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Footer from "../Shared/Footer";
import { FaRegPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import LocationInfo from "../Shared/LocationInfo/LocationInfo";

const ContactUs = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        console.log(data);
    }

    const onChange = () => {

    }


    return (
        <div className="space-y-24">
            <Helmet>
                <title>MHS | CONTACT US</title>
            </Helmet>
            <Cover
                bgImg={contact}
                head={'CONTACT US'}
                body={'Would you like to try a dish?'}
                capital={true}
            ></Cover>
            <div className="max-w-screen-xl px-3 mx-auto">
                <LocationInfo></LocationInfo>
            </div>
            <div className="max-w-screen-xl px-3 mx-auto">
                <SectionTitle
                    heading={'Send Us a Message'}
                    subHeading={'CONTACT FORM'}
                ></SectionTitle>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-[#F3F3F3] mt-10 rounded px-3 py-20 md:p-20">
                    <div className="grid sm:grid-cols-2 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold" title="This field is required">Name <span className="text-red-500">*</span></span>
                            </label>
                            <input type="text"  {...register('name', { required: true })} placeholder="Enter Your Name" className="input bg-[#fff]" />
                            {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold" title="This field is required">Email <span className="text-red-500">*</span></span>
                            </label>
                            <input type="email"  {...register('email', { required: true })} placeholder="Enter Your Email" className="input bg-[#fff]" />
                            {errors.email && <span className="text-red-500 text-xs mt-1">Email is required</span>}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold" title="This field is required">Phone <span className="text-red-500">*</span></span>
                        </label>
                        <input type="text"  {...register('phone', { required: true })} placeholder="Enter Your Phone" className="input bg-[#fff]" />
                        {errors.phone && <span className="text-red-500 text-xs mt-1">Phone is required</span>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-bold" title="This field is required">Message <span className="text-red-500">*</span></span>
                        </label>
                        <textarea className="textarea w-full bg-[#fff]" {...register('message', { required: true })} placeholder="Enter your message"></textarea>
                        {errors.message && <span className="text-red-500 text-xs">Please write something</span>}
                    </div>
                    <ReCAPTCHA
                        sitekey="6LcXDqApAAAAAH0rFh-_lnnkMl5HqQh_td10z1Hc"
                        onChange={onChange}
                    />
                    <div className="flex justify-center">
                        <button className="btn w-[180px] mt-5 bg-gradientButton text-white">Add Item <FaRegPaperPlane /></button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;