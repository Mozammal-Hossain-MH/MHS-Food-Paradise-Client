import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');

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
                    popularMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <Link to={'/menu'}><button className="btn btn-outline border-0 border-b-4 ">VIEW FULL MENU</button></Link>
            </div>
        </section>
    );
};

export default PopularMenu;