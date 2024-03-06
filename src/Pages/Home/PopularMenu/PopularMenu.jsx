import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PopularMenu = () => {
    const [menuData, setMenuData] = useState([]);
    
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => setMenuData(data.filter(item => item.category === 'popular')))
    }, [])

    return (
        <section className="mx-3">
            <div className="mb-10">
                <SectionTitle
                    heading={'Check it out'}
                    subHeading={'FROM OUR MENU'}
                >
                </SectionTitle>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    menuData.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;