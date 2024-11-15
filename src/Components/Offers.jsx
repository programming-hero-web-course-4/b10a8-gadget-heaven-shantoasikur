import { Helmet } from "react-helmet-async";

const Offers = () => {
    return (
        <div>
            <Helmet>
                <title>Offers | Gadget Heaven</title>
            </Helmet>
            <div className="flex flex-col w-[90%] mx-auto items-center my-10">
                <img className="w-[300px]" src="/ComingSoon.gif" alt="" />
                <h1 className="text-[28px] text-purple-800 font-extrabold">There are some biggest offers for you <i className="fa-solid fa-gift"></i></h1>
            </div>
        </div>
    );
};

export default Offers;