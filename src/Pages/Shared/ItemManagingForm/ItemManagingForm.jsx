import { ImSpoonKnife } from "react-icons/im";

const ItemManagingForm = ({ handleSubmit, register, errors, onSubmit, useImg, updatedItem }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold" title="This field is required">Recipe name <span className="text-red-500">*</span></span>
                </label>
                <input type="text" defaultValue={updatedItem?.name} {...register('name', { required: true })} placeholder="Recipe name" className="input bg-[#F6F6F6]" />
                {errors.name && <span className="text-red-500 text-xs mt-1">Recipe Name is required</span>}
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold" title="This field is required">Category <span className="text-red-500">*</span></span>
                    </label>
                    <select defaultValue={updatedItem?.category} {...register('category', { required: true })} className="select w-full max-w-xs bg-[#F6F6F6]" required>
                        <option value={'def'}>Select a Category</option>
                        <option value='salad'>Salad</option>
                        <option value='pizza'>Pizza</option>
                        <option value='soup'>Soup</option>
                        <option value='dessert'>Dessert</option>
                        <option value='drinks'>Drinks</option>
                        <option value='popular'>Popular</option>
                        <option value='offered'>Offered</option>
                    </select>
                    {errors.category && <span className="text-red-500 text-xs mt-1">Category is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold" title="This field is required">Price$ <span className="text-red-500">*</span></span>
                    </label>
                    <input type="text" defaultValue={updatedItem?.price} {...register('price', { required: true })} placeholder="Price" className="input bg-[#F6F6F6]" />
                    {errors.price && <span className="text-red-500 text-xs mt-1">Price is required</span>}
                </div>
            </div>
            <div>
                <label className="label">
                    <span className="label-text font-bold" title="This field is required">Recipe details <span className="text-red-500">*</span></span>
                </label>
                <textarea defaultValue={updatedItem?.recipe} className="textarea w-full bg-[#F6F6F6]" {...register('recipe', { required: true })} placeholder="Recipe details"></textarea>
                {errors.recipe && <span className="text-red-500 text-xs">Recipe details is required</span>}
            </div>
            {
                useImg ||
                <>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold" title="This field is required">Pick a file <span className="text-red-500">*</span></span>
                        </div>
                        <input type="file" {...register('image')} className="file-input file-input-bordered w-full max-w-xs" />
                    </label>
                    <div className="flex justify-center">
                        <button className="btn mt-5 bg-gradientButton w-1/2 text-white">Update Recipe Details</button>
                    </div>
                </>
            }
            {
                useImg &&
                <>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-bold" title="This field is required">Pick a file <span className="text-red-500">*</span></span>
                        </div>
                        <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        {errors.image && <span className="text-red-500 text-xs mt-1">Image is required</span>}
                    </label>
                    <button className="btn w-[180px] mt-5 bg-gradientButton text-white">Add Item <ImSpoonKnife /></button>
                </>
            }

        </form>
    );
};

export default ItemManagingForm;