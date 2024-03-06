

const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="flex items-center mb-4">
            <img className="rounded-r-full rounded-bl-full w-20 mr-3" src={image} alt="" />
            <div className="flex justify-between items-center flex-grow">
                <div className="mr-3">
                    <p className="font-cinzel font-bold text-xl mb-2">{name} ----------</p>
                    <p className="text-xs text-[#737373]">{recipe}</p>
                </div>
                <p className="text-[#BB8506]">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;