import Cover from "../../Shared/Cover/Cover";
import Footer from "../../Shared/Footer";
import shopImg from '../../../assets/shop/banner2.jpg';

const Shop = () => {
    return (
        <div>
            <Cover 
            bgImg={shopImg}
            head={'our shop'}
            body={'Would you like to try a dish?'}
            capital={true}
            ></Cover>
            <Footer></Footer>
        </div>
    );
};

export default Shop;