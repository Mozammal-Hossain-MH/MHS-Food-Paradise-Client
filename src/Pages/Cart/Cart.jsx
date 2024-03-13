import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCart from "../../Hooks/useCart";
import Table from "../Shared/Table/Table";


const Cart = () => {
    const [cart, refetch] = useCart();
    
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div className="mx-4 xl:mx-36 my-10 space-y-10">
            <div>
                <SectionTitle
                    heading={'My Cart'}
                    subHeading={'WANNA ADD MORE?'}
                ></SectionTitle>
            </div>
            <div className="bg-[#fff] p-3 md:p-12 space-y-10">
                <div className="font-cinzel flex justify-between items-center font-bold">
                    <h3 className="text-lg lg:text-3xl">Total Orders: {cart.length}</h3>
                    <h3 className="text-lg lg:text-3xl">Total Price: ${totalPrice}</h3>
                    <button className="btn btn-sm bg-[#D1A054]  text-white">Pay</button>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="text-xs bg-[#D1A054] text-white">
                                <tr className="">
                                    <th className="w-2"> </th>
                                    <th className="w-20">Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <Table
                                        key={item._id}
                                        item={item}
                                        serial={index + 1}
                                        refetch={refetch}
                                    ></Table>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;