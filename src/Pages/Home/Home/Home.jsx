import Footer from "../../Shared/Footer";
import Banner from "../Banner/Banner";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import FoodCategory from "../Food Category/FoodCategory";
import Offered from "../Offered/Offered";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div className="space-y-24">
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto space-y-24">
                <FoodCategory></FoodCategory>
                <ChefService></ChefService>
                <PopularMenu></PopularMenu>
                <section>
                    <div className="w-full h-40 bg-black text-white flex justify-center items-center">
                        <p className="text-xl md:text-3xl font-bold">Call Us: +88 0192345678910</p>
                    </div>
                </section>
                <Offered></Offered>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;