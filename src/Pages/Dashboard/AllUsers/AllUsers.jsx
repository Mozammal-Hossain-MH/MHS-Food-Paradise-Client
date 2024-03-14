import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { getAuth } from "firebase/auth";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const auth = getAuth()
    console.log(auth)

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    Swal.fire({
                        title: "Success!",
                        text: `${user.name} is now an admin`,
                        icon: "success",
                        showConfirmButton: false
                    });
                    refetch();
                }
            })
    }

    const handleDeleteUser = user => {
        console.log(user)
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success",
                                showConfirmButton: false
                            });
                            refetch();
                        }
                    })
            }
        });
    }


    return (
        <div className="mx-4 xl:mx-36 my-10 space-y-10">
            <Helmet>
                <title>MHS | Users</title>
            </Helmet>
            <div>
                <SectionTitle
                    heading={'How Many???'}
                    subHeading={'MANAGE ALL USERS'}
                ></SectionTitle>
            </div>
            <div className="bg-[#fff] p-3 md:p-12 space-y-5">
                <div className="font-cinzel font-bold">
                    <h3 className="text-lg lg:text-3xl">Total Users: {users.length}</h3>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="text-xs bg-[#D1A054] text-white">
                                <tr className="">
                                    <th className="w-2"> </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <tr key={user._id}>
                                        <th className="text-xs md:text-base w-2">
                                            {index + 1}
                                        </th>
                                        <td title="User Name">{user.name}</td>
                                        <td title="User Email" className="text-xs md:text-base">{user.email} </td>
                                        <td className="text-xs md:text-base">
                                            {user.role === 'admin' ?
                                                'Admin' :
                                                <button title="Make Admin" onClick={() => handleMakeAdmin(user)} className="btn btn-sm bg-[#D1A054]">
                                                    <FaUsers></FaUsers>
                                                </button>}
                                        </td>
                                        <th>
                                            <button title="Delete User" onClick={() => handleDeleteUser(user)} className="btn btn-sm bg-red-600 hover:bg-red-300"><FaTrashAlt className="text-white"></FaTrashAlt></button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;