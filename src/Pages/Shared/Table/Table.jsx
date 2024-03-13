import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Table = ({ item, serial, refetch }) => {
    const { image, name, price } = item;
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        console.log(id)

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
    return (
        <tr>
            <th className="text-xs md:text-base w-2">
                {serial}
            </th>
            <td className="w-20">
                <img className="w-12 md:w-20" src={image} />
            </td>
            <td className="text-xs md:text-base">{name} </td>
            <td className="text-xs md:text-base">{price}</td>
            <th>
                <button onClick={() => handleDelete(item._id)} className="btn btn-sm bg-red-600 hover:bg-red-300"><FaTrashAlt className="text-white"></FaTrashAlt></button>
            </th>
        </tr>
    );
};

export default Table;