import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Table from "../../Shared/Table/Table";


const ManageItems = () => {
    const [menu,,refetch] = useMenu();

    return (
        <div className="mx-4 xl:mx-36 my-10 space-y-10">
            <Helmet>
                <title>MHS | Manage Items</title>
            </Helmet>
            <div>
                <SectionTitle
                    heading={'Hurry Up'}
                    subHeading={'MANAGE ALL ITEMS'}
                ></SectionTitle>
            </div>
            <div className="bg-[#fff] p-3 md:p-12 space-y-10">
                <div className="font-cinzel font-bold">
                    <h3 className="text-lg lg:text-3xl">Total Items: {menu.length}</h3>
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((item, index) => <Table 
                                        key={item._id}
                                        item={item}
                                        manageItem={true}
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

export default ManageItems;