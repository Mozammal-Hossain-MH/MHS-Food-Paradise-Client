import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <Link to={`/shop/${title}`}><button className="btn btn-outline border-0 border-b-4 uppercase">order your favourite food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;