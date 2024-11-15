import { useLocation, useNavigate } from "react-router-dom";

const Banner = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isDashboard = location.pathname === "/dashboard";
    const isStatistics = location.pathname === "/statistics";
    const isOffers = location.pathname === "/offers";
    const isProductDetails = location.pathname.startsWith("/product-details");
    const bannerClass = isHomePage ? "w-[90%] mx-auto lg:pb-[300px] pb-[100px]" : isDashboard ? "pb-[100px]" : isProductDetails ? "pb-[300px]" : "w-full pb-[10px]";
    const bannerClass2 = isHomePage ? "" : "hidden";
    const bannerText = isHomePage ? "Upgrade Your Tech Accessorize with Gadget Heaven Accessories" : isDashboard ? "Dashboard" : isStatistics ? "Statistics" : isOffers ? "Special Offers" : "Product Details";
    const bannerButtonClass = isDashboard ? "hidden" : "";

    const navigate = useNavigate();
    const handleShopNow = () => {
        navigate('/#GadgetList');
    };

    return (
        <div>
            <div className={`bg-purple-500 pt-10 ${bannerClass}`}>
                <div className="flex flex-col items-center gap-5 w-[70%] mx-auto ">
                    <p className="text-[56px] font-[700] text-center text-white">{bannerText}</p>
                    <p className="text-[16px] font-[400] text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className={`btn text-purple-500 text-lg font-bold rounded-3xl ${bannerButtonClass}`} onClick={handleShopNow}>Shop Now</button>
                </div>
            </div>
            <div className={`w-[70%] mx-auto lg:mt-[-250px] mt-[-80px] lg:p-8 p-2 bg-[#FFFFFF4D] rounded-[20px] ${bannerClass2}`}>
                <img className="rounded-[20px] lg:h-[500px] h-[200px] w-full" src="/WhatsApp Image 2024-11-16 at 02.19.58_5e21619f.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;