import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const LocationInfo = () => {
    return (
        <>
            <SectionTitle
                heading={'Visit Us'}
                subHeading={'OUR LOCATION'}
            ></SectionTitle>
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
                <div className="rounded border">
                    <div className="bg-[#D1A054] py-4 rounded-t">
                        <FaPhoneAlt className="text-xl sm:text-3xl text-white mx-auto "></FaPhoneAlt>
                    </div>
                    <div className="bg-[#F3F3F3] h-44 mx-4 mb-4 text-center rounded-b flex justify-center items-center" >
                        <div className="">
                            <h4 className="font-bold text-[#151515]">PHONE</h4>
                            <p><small>+38 (012) 34 56 789</small></p>
                        </div>
                    </div>
                </div>
                <div className="rounded border">
                    <div className="bg-[#D1A054] py-4 rounded-t">
                        <IoLocation className="text-xl sm:text-3xl text-white mx-auto " />
                    </div>
                    <div className="bg-[#F3F3F3] h-44 mx-4 mb-4 text-center rounded-b flex justify-center items-center">
                        <div>
                            <h4 className="font-bold text-[#151515]">ADDRESS</h4>
                            <p><small>123 ABS Street, Uni 21, Bangladesh</small></p>
                        </div>
                    </div>
                </div>
                <div className="rounded border">
                    <div className="bg-[#D1A054] py-4 rounded-t">
                        <MdOutlineWatchLater className="text-xl sm:text-3xl text-white mx-auto " />
                    </div>
                    <div className="bg-[#F3F3F3] h-44 mx-4 mb-4 text-center rounded-b flex justify-center items-center">
                        <div>
                            <h4 className="font-bold text-[#151515]">WORKING HOURS</h4>
                            <p><small>Mon - Fri: 08:00 - 22:00</small></p>
                            <p><small>Sat - Sun: 10:00 - 23:00</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationInfo;