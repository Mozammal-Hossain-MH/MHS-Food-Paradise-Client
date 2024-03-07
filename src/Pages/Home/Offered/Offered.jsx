import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import OfferItem from "../../Shared/OfferItem/OfferItem";
import useMenu from "../../../Hooks/useMenu";


const Offered = () => {
    const [menu] = useMenu();
    const offerItems = menu.filter(item => item.category === 'offered')

    return (
        <section className="mx-3">
            <div className="mb-10">
                <SectionTitle
                    heading={'Should Try'}
                    subHeading={'CHEF RECOMMENDS'}
                >
                </SectionTitle>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                {
                    offerItems.map(item => <OfferItem
                        key={item._id}
                        item={item}
                    ></OfferItem>)
                }
            </div>
        </section>
    );
};

export default Offered;