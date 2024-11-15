import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const target = document.querySelector(location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const [gadgets, setGadgets] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    
    useEffect(()=>{
        fetch('/gadget.json')
        .then(res=>res.json())
        .then(data=>setGadgets(data))
    },[]);

    const filteredGadgets = activeCategory === "All" ? gadgets : gadgets.filter(gadget => gadget.category === activeCategory);

    const getButtonClass = (category) => {
        return category === activeCategory
            ? "bg-purple-600 text-white"
            : "bg-gray-200 text-black";
    };
    return (
        <div className="py-10 bg-[#D9D9D9]">
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <div id="GadgetList" className="grid grid-cols-4 gap-5 lg:w-[90%] w-[95%] mx-auto">
                <div className="col-span-1 lg:px-9 px-1">
                    <div className="flex flex-col gap-5 bg-white items-center lg:p-5 p-1 lg:rounded-[24px]">
                        {["All", "Computers", "Phones", "Smart Watches", "Power Banks", "Chargers", "Fitness"].map((category) => (
                            <NavLink
                                key={category}
                                to={category === "All" ? "" : `/category/${category}`}
                                className={`btn w-full rounded-[24px] ${getButtonClass(category)}`}
                                onClick={()=>setActiveCategory(category)}
                            >
                                {category}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                        {filteredGadgets.length > 0 ? (
                            filteredGadgets.map(gadget => (
                                <div key={gadget.product_id} className="rounded-[16px] p-6 border bg-white">
                                    <img className="w-full h-[200px] rounded-[16px] border" src={gadget.product_image} alt={gadget.product_title} />
                                    <div>
                                        <h1 className="text-[24px] font-[600] text-[#09080F]">{gadget.product_title}</h1>
                                        <p>Price: {gadget.price} $</p>
                                    </div>
                                    <NavLink to={`/product-details/${gadget.product_id}`}><button className="btn mt-2 border-[#9538E2] text-[#9538E2]">View Details</button></NavLink>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 text-center text-gray-500 font-semibold text-xl">
                                <Outlet context={[gadgets, activeCategory]}></Outlet>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;