import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Table = ({ item, serial, refetch, manageItem }) => {
    const { image, name, price, category } = item;
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount === 1) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Deleted successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const handleManageItemDelete = item => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount === 1) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Deleted successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }


    return (
        <tr>
            <th className="text-xs md:text-base w-2">
                {serial}
            </th>
            <td className="w-20">
                <img className="w-12 md:w-20" src={image} />
            </td>
            <td className="text-xs md:text-base">{name}<span className="font-bold">{manageItem && `,  ${category}`}</span> </td>
            <td className="text-xs md:text-base">{price}</td>
            {
                manageItem && <td>
                    <Link to={`/dashboard/update-item/${item._id}`}><button className="btn btn-sm bg-[#D1A054] hover:bg-[#d3af79]"><FaEdit className="text-white"></FaEdit></button></Link>
                </td>
            }
            {
                manageItem ?
                    <td>
                        <button onClick={() => handleManageItemDelete(item)} className="btn btn-sm bg-red-600 hover:bg-red-300"><FaTrashAlt className="text-white"></FaTrashAlt></button>
                    </td>
                    : <td>
                        <button onClick={() => handleDelete(item._id)} className="btn btn-sm bg-red-600 hover:bg-red-300"><FaTrashAlt className="text-white"></FaTrashAlt></button>
                    </td>
            }
        </tr>
    );
};

export default Table;