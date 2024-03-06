

const OfferItem = ({ item }) => {
    const { image, name, recipe } = item;

    return (
        <div className="bg-[#F3F3F3] space-y-4 text-center relative">
            <img className="w-full" src={image} />
            <h2 className="text-xs md:text-xl lg:text-2xl font-bold mx-3">{name}</h2>
            <p className="pb-10 sm:pb-16 mx-3 text-xs text-[#737373]">{recipe}</p>
            <div className="flex justify-center">
                <button className="btn-xs md:btn-md btn btn-outline border-0 border-b-4 absolute text-[#BB8506] bg-[#E8E8E8] bottom-4">ADD TO CART</button>
            </div>
        </div>
    );
};

export default OfferItem;