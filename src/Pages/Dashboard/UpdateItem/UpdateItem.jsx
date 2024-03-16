import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import ItemManagingForm from "../../Shared/ItemManagingForm/ItemManagingForm";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_WEB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const updatedItem = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get a url

        if (data.image.length > 0) {
            const imageFile = { image: data.image[0] };
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            })

            if (res.data.success) {
                // now send all data to the database with image
                const menuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
                }
                const menuRes = await axiosSecure.patch(`/menu/${updatedItem._id}`, menuItem)
                console.log(menuRes.data);
                if (menuRes.data.modifiedCount === 1) {
                    toast.success(`${data.name} updated successfully`);
                }
                if (menuRes.data.modifiedCount === 0) {
                    toast.error(`Nothing Changed`);
                }
            }
        }
        else {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe
            }
            const menuRes = await axiosSecure.patch(`/menu/${updatedItem._id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount === 1) {
                toast.success(`${data.name} updated successfully`);
            }
            if (menuRes.data.modifiedCount === 0) {
                toast.error(`Nothing Changed`);
            }
        }
    }

    return (
        <div className="mx-4 xl:mx-36 my-10 space-y-10">
            <Helmet>
                <title>MHS | Update Items</title>
            </Helmet>
            <div>
                <SectionTitle
                    heading={'Remove old infos'}
                    subHeading={'UPDATE ITEM'}
                ></SectionTitle>
            </div>
            <div className="bg-[#fff] p-3 md:p-12 space-y-5">
                <ItemManagingForm
                    handleSubmit={handleSubmit}
                    register={register}
                    errors={errors}
                    onSubmit={onSubmit}
                    updatedItem={updatedItem}
                ></ItemManagingForm>
            </div>
        </div>
    );
};

export default UpdateItem;