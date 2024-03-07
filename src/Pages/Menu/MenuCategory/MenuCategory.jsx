import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items}) => {
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
                <button className="btn btn-outline border-0 border-b-4 uppercase">order your favourite food</button>
            </div>
        </div>
    );
};

export default MenuCategory;