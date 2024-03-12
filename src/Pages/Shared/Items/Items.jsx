import { useState } from "react";
import Item from "../Item/Item";

const Items = ({ items }) => {
    const totalItems = items.length;
    const itemPerPage = 6;
    const totalPage = Math.ceil(totalItems / itemPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const currentPageItems = items.slice(((currentPage - 1) * 6), ((currentPage - 1) * 6) + 6)

    let pageNo = [];
    for (let i = 1; i <= totalPage; i++) {
        pageNo.push(i);
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNext = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                {
                    currentPageItems.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            {
                items.length > 6 &&

                <div className="flex justify-center mt-20">
                    <button onClick={handlePrevious} className="btn btn-outline mr-3 hover:scale-110">Previous</button>
                    {
                        pageNo.map(page => <button
                            className={`btn mr-3 hover:scale-110 ${currentPage === page && 'bg-[#BB8506] text-white  hover:bg-[#BB8506]'}`}
                            key={page}
                            onClick={() => setCurrentPage(page)}
                        >{page}</button>)
                    }
                    <button onClick={handleNext} className="btn btn-outline mr-3 hover:scale-110">Next</button>
                </div>
            }
        </div>

    );
};

export default Items;