import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import LocationInfo from "../../Shared/LocationInfo/LocationInfo";
import { useForm } from "react-hook-form";
import { BiSolidFoodMenu } from "react-icons/bi";
import useAuthContext from "../../../Hooks/useAuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Reservation = () => {
    const { user } = useAuthContext();
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        const guests = parseFloat(data.person);
        
        const bookings = {
            date: data.date,
            time: data.time,
            person: guests,
            name: data.name,
            contactEmail: data.email,
            userEmail: user.email,
            phone: data.phone,
            status: 'pending',
            price: guests === 1 ? 10 : guests === 2 ? 20 : guests === 4 ? 30 : guests === 8 ? 60 : guests === 16 ? 100 : 0
        }
        
        const res = await axiosSecure.post('/reservation', bookings)
        if(res.data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Reservation complete",
                showConfirmButton: false,
                timer: 1500
              });
              reset();
        }
    }

    return (
        <div className="mx-6 my-20 space-y-24">
            <div>
                <Helmet>
                    <title>MHS | Reservation</title>
                </Helmet>
                <SectionTitle
                    heading={'Reservation'}
                    subHeading={'BOOK A TABLE'}
                ></SectionTitle>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-[#F3F3F3] mt-10 rounded px-3 py-20 md:p-20">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold" title="This field is required">Date <span className="text-red-500">*</span></span>
                            </label>
                            <input type="date"  {...register('date', { required: true })} placeholder="Enter Your Date" className="input bg-[#fff]" />
                            {errors.date && <span className="text-red-500 text-xs mt-1">Date is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold" title="This field is required">Time <span className="text-red-500">*</span></span>
                            </label>
                            <input type="time"  {...register('time', { required: true })} placeholder="Enter Your Time" className="input bg-[#fff]" />
                            {errors.time && <span className="text-red-500 text-xs mt-1">Time is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold" title="This field is required">Guest <span className="text-red-500">*</span></span>
                            </label>
                            <select defaultValue={'def'} {...register('person', { required: true })} className="select w-full max-w-xs bg-[#F6F6F6]" required>
                                <option value={'def'}>Select Person</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='4'>4</option>
                                <option value='8'>8</option>
                                <option value='16'>16</option>
                            </select>
                            {errors.person && <span className="text-red-500 text-xs mt-1">Please select persons</span>}
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold" title="This field is required">Phone <span className="text-red-500">*</span></span>
                            </label>
                            <input type="text"  {...register('phone', { required: true })} placeholder="Enter Your Phone" className="input bg-[#fff]" />
                            {errors.phone && <span className="text-red-500 text-xs mt-1">Phone is required</span>}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn w-[180px] mt-5 bg-gradientButton text-white">Book a Table <BiSolidFoodMenu /></button>
                    </div>
                </form>
            </div>
            <div>
                <LocationInfo></LocationInfo>
            </div>
        </div>
    );
};

export default Reservation;