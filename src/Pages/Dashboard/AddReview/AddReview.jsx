import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { FaRocket } from "react-icons/fa";
import useAuthContext from "../../../Hooks/useAuthContext";
import toast from "react-hot-toast";


const AddReview = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const axiosSecure = useAxiosSecure();
    const [rating, setRating] = useState(1);
    const { user } = useAuthContext();

    

    const onSubmit = async (data) => {
        const review = {
            email: user.email,
            name: user.displayName,
            favouriteRecipe: data.recipeName,
            suggestion: data.suggestion,
            details: data.details,
            rating: rating
        }

        const res = await axiosSecure.put('/reviews', review);
        
        if (res.data.upsertedCount > 0) {
            toast.success('Review added successfully');
            reset();
        }
        else if (res.data.modifiedCount > 0) {
            toast.success('Review updated successfully');
            reset();
        }
    }

    

    return (
        <div className="mx-4 xl:mx-36 my-10 space-y-10">
            <Helmet>
                <title>MHS | Add Review</title>
            </Helmet>
            <div>
                <SectionTitle
                    heading={'Sharing is Caring!!!'}
                    subHeading={'GIVE A REVIEW...'}
                ></SectionTitle>
            </div>
            <div className="bg-[#fff] p-3 md:p-12 space-y-5">
                <div className="flex justify-center">
                    <div className="text-center space-y-4">
                        <h3 className="font-cinzel text-3xl">Rate US!</h3>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                            isRequired
                        />
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Which recipe you liked most?</span>
                        </label>
                        <input type="text" {...register('recipeName')} placeholder="Recipe you liked most" className="input bg-[#F6F6F6]" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Do you have any suggestion for us?</span>
                        </label>
                        <input type="text" {...register('suggestion')} placeholder="Suggestion" className="input bg-[#F6F6F6]" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-bold">Kindly express your care in a short way.</span>
                        </label>
                        <textarea className="textarea w-full bg-[#F6F6F6]" {...register('details')} placeholder="Review in detail"></textarea>
                    </div>
                    <button className="btn w-[180px] mt-5 bg-gradientButton text-white">Send Review <FaRocket /></button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;