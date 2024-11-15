import { useOutletContext } from "react-router-dom";

const GadgetList = () => {
    const [gadgets, activeCategory] = useOutletContext();

    const filteredGadgets = activeCategory === "All" 
        ? gadgets 
        : gadgets.filter(gadget => gadget.category === activeCategory);

    return (
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
                    No Data Available
                </div>
            )}
        </div>
    );
};

export default GadgetList;