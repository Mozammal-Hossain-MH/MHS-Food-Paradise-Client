import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer";
import Banner from "../Banner/Banner";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import FoodCategory from "../Food Category/FoodCategory";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Items from "../../Shared/Items/Items";



const Home = () => {
    const [menu] = useMenu();
    const offerItems = menu.filter(item => item.category === 'offered')
    return (
        <div className="space-y-24">
            <Helmet>
                <title>MHS | Home</title>
            </Helmet>
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
                <section className="mx-3">
                    <div className="mb-10">
                        <SectionTitle
                            heading={'Should Try'}
                            subHeading={'CHEF RECOMMENDS'}
                        >
                        </SectionTitle>
                    </div>
                    <Items items={offerItems}></Items>
                </section>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;