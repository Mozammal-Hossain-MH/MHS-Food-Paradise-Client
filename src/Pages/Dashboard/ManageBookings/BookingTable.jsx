import { FaCheck } from "react-icons/fa";


const BookingTable = ({ reservation, index }) => {
    console.log(reservation)
    const { email, phone, date, status } = reservation;
    const onlyDate = date?.split('T')[0]
    const onlyTime = date?.split('T')[1].split('.')[0]
    return (
        <tr>
            <th className="text-xs md:text-base w-2">{index}</th>
            <td className="text-xs md:text-base">{email}</td>
            <td className="text-xs md:text-base">{phone}</td>
            <td className="text-xs md:text-base">{onlyDate}</td>
            <td className="text-xs md:text-base">{onlyTime}</td>
            <td className="text-xs md:text-base">{status}</td>
            <td >
                <div className="flex justify-center items-center rounded-full bg-green-300 h-12 w-12">
                    <FaCheck className="h-8 w-8 text-white"></FaCheck>
                </div>
            </td>
        </tr>
    );
};

export default BookingTable;