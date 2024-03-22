import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const BookingsTable = ({ item, index, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { person, date, time, price, _id } = item;

    const handleDeleteBooking = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
              const res = await axiosSecure.delete(`/reservation/${id}`)
              console.log(res);
              if(res.data.deletedCount > 0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Booking has been deleted",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
              }
            }
          });
    }
    
    return <tr className="text-[#737373]">
        <th className="text-black">{index}</th>
        <td>{person} Guest</td>
        <td>{date}, {time}</td>
        <td>
            ${price}
        </td>
        <td>
            <button onClick={() => handleDeleteBooking(_id)} className="btn btn-sm bg-red-600 hover:bg-red-300"><FaTrashAlt className="text-white"></FaTrashAlt></button>
        </td>
    </tr>;
};

export default BookingsTable;