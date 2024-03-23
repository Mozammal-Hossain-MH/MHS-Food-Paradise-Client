import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Footer from '../../Shared/Footer';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div className='space-y-24'>
            <Helmet>
                <title>MHS | Menu</title>
            </Helmet>
            <Cover
                bgImg={'/banner3.webp'}
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
                    bgImg={'/dessert-bg.webp'}
                    head={'DESSERTS'}
                    body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                >
                </Cover>
                <div className='mx-3'>
                    <MenuCategory items={desserts} title={'dessert'}></MenuCategory>
                </div>
                <Cover
                    bgImg={'/pizza-bg.webp'}
                    head={'PIZZAS'}
                    body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                >
                </Cover>
                <div className='mx-3'>
                    <MenuCategory items={pizzas} title={'pizza'}></MenuCategory>
                </div>
                <Cover
                    bgImg={'/salad-bg.webp'}
                    head={'SALADS'}
                    body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                >
                </Cover>
                <div className='mx-3'>
                    <MenuCategory items={salads} title={'salad'}></MenuCategory>
                </div>
                <Cover
                    bgImg={'/soup-bg.webp'}
                    head={'SOUPS'}
                    body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                >
                </Cover>
                <div className='mx-3'>
                    <MenuCategory items={soups} title={'soup'}></MenuCategory>
                </div>
                <Cover
                    bgImg={'/drinks-bg.webp'}
                    head={'DRINKS'}
                    body={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                >
                </Cover>
                <div className='mx-3'>
                    <MenuCategory items={drinks} title={'drinks'}></MenuCategory>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Menu;