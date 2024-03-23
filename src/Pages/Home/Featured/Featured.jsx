import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed">
            <div className="bg-black bg-opacity-60">
            <div className="pt-8 sm:pt-20 mb-10">
                <SectionTitle
                    heading={'Check it out'}
                    subHeading={'FROM OUR MENU'}
                    isWhite={true}
                ></SectionTitle>
            </div>
            <div className="sm:flex justify-center items-center sm:pb-32 px-3 lg:px-32">
                <div>
                    <img src={'/featured.webp'} alt="" />
                </div>
                <div className="text-white py-10 sm:py-0 sm:ml-3 space-y-3">
                    <p>March 20, 2023</p>
                    <h3 className="font-semibold text-xl">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">READ MORE</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;