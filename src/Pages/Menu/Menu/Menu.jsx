import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Footer from '../../Shared/Footer';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div className='space-y-24'>
            <Helmet>
                <title>MHS | Menu</title>
            </Helmet>
            <Cover
                bgImg={menuImg}
                head={'OUR MENU'}
                body={'Would you like to try a dish?'}
                capital={true}
            >
            </Cover>
            <div className='max-w-screen-xl mx-auto space-y-24'>
                <div className='mx-3'>
                    <div className='mb-10'>
                        <SectionTitle
                            heading={"Don't miss"}
                            subHeading={"TODAY'S OFFER"}
                        ></SectionTitle>
                    </div>
                    <MenuCategory items={offered}></MenuCategory>
                </div>
                <Cover
                    bgImg={dessertImg}
                    head={'DESSERTS'}
                    body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                >
                </Cover>
                <div className='mx-3'>
                    <MenuCategory items={desserts}></MenuCategory>
                </div>
                <Cover
                    bgImg={pizzaImg}
                    head={'PIZZAS'}
                    body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                >
                </Cover>
                <div className='mx-3'>
                    <MenuCategory items={pizzas}></MenuCategory>
                </div>
                <Cover
                    bgImg={saladImg}
                    head={'SALADS'}
                    body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                >
                </Cover>
                <div className='mx-3'>
                    <MenuCategory items={salads}></MenuCategory>
                </div>
                <Cover
                    bgImg={soupImg}
                    head={'SOUPS'}
                    body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                >
                </Cover>
                <div className='mx-3'>
                    <MenuCategory items={soups}></MenuCategory>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Menu;