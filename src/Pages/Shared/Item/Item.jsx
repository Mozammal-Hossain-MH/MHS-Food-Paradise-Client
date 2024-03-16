import toast from "react-hot-toast";
import useAuthContext from "../../../Hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";


const Item = ({ item }) => {
    const { image, name, recipe, price, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuthContext();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // send information to the database
            const cartItems = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItems)
            .then(res => {
                if(res.data.insertedId){
                    toast.success(`${name} added to your cart`);
                    // refetch cart to update the cart items count
                    refetch();
                }
            })
        }
        else {
            toast.error('Please login before add to cart');
            navigate('/login', {state: {from: location}});
        }
    }

    return (
        <div className="bg-[#F3F3F3] space-y-4 text-center relative">
            <img className="w-full" src={image} />
            <p className="bg-[#111827] px-3 py-1 rounded text-white absolute top-1 sm:top-3 right-2 sm:right-5">${price}</p>
            <h2 className="text-xs md:text-xl lg:text-2xl font-bold mx-3">{name}</h2>
            <p className="pb-10 sm:pb-16 mx-3 text-xs text-[#737373]">{recipe}</p>
            <div className="flex justify-center">
                <button onClick={handleAddToCart} className="btn-xs md:btn-md btn btn-outline border-0 border-b-4 absolute text-[#BB8506] bg-[#E8E8E8] bottom-4">ADD TO CART</button>
            </div>
        </div>
    );
};

export default Item;