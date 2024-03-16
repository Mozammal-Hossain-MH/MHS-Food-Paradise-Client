import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import ItemManagingForm from "../../Shared/ItemManagingForm/ItemManagingForm";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_WEB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get a url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
        console.log(res.data);
        if (res.data.success) {
            // now send all data to the database with image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                toast.success(`${data.name} added to the menu successfully`);
                reset();
            }
        }
    }

    return (
        <div className="mx-4 xl:mx-36 my-10 space-y-10">
            <Helmet>
                <title>MHS | Add Items</title>
            </Helmet>
            <div>
                <SectionTitle
                    heading={'Whats new?'}
                    subHeading={'ADD AN ITEM'}
                ></SectionTitle>
            </div>
            <div className="bg-[#fff] p-3 md:p-12 space-y-5">
                <ItemManagingForm 
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
                onSubmit={onSubmit}
                useImg={true}
                ></ItemManagingForm>
            </div>
        </div>
    );
};

export default AddItems;