

const SectionTitle = ({heading, subHeading, isWhite}) => {
    return (
        <div className="w-2/3 sm:w-1/2 md:w-1/3 mx-auto text-center">
            <p className="text-[#D99904] my-2">---{heading}---</p>
            <hr />
            <h1 className={`font-bold my-2 ${isWhite && 'text-white'}`}>{subHeading}</h1>
            <hr />
        </div>
    );
};

export default SectionTitle;