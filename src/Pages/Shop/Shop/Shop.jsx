import Cover from "../../Shared/Cover/Cover";
import Footer from "../../Shared/Footer";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Items from "../../Shared/Items/Items";
import useMenu from "../../../Hooks/useMenu";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useParams } from "react-router-dom";
import './Shop.css';

const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { title } = useParams()
    const initialIndex = categories.indexOf(title)
    const [tabId, setTabId] = useState(initialIndex);

    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div className="space-y-24">
            <Helmet>
                <title>MHS | SHOP</title>
            </Helmet>
            <Cover
                bgImg={'/banner2.webp'}
                head={'our shop'}
                body={'Would you like to try a dish?'}
                capital={true}
            ></Cover>
            <div className="max-w-screen-xl px-3 mx-auto">
                <Tabs defaultIndex={tabId} onSelect={(index) => setTabId(index)}>
                    <TabList className={'mb-10 flex justify-center text-xs sm:text-base font-bold'}>
                        <Tab>SALADS</Tab>
                        <Tab>PIZZAS</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <Items items={salads}></Items>
                    </TabPanel>
                    <TabPanel>
                        <Items items={pizzas}></Items>
                    </TabPanel>
                    <TabPanel>
                        <Items items={soups}></Items>
                    </TabPanel>
                    <TabPanel>
                        <Items items={desserts}></Items>
                    </TabPanel>
                    <TabPanel>
                        <Items items={drinks}></Items>
                    </TabPanel>
                </Tabs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Shop;