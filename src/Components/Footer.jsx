const Footer = () => {
    return (
        <footer className="bg-white text-neutral-content p-10">
            <div className="w-[60%] mx-auto text-center">
                <h1 className="text-[#09080F] text-[32px] font-[700]">Gadget Heaven</h1>
                <p className="text-[#09080F99] tex-[16px] font-[400]">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="w-[90%] mx-auto my-10">
                <hr />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start items-center w-[60%] mx-auto gap-3">
                <nav className="flex flex-col text-center">
                    <h6 className="text-[18px] font-[700] text-[#09080F]">Services</h6>
                    <a className="link link-hover text-[#09080F99]">Product Support</a>
                    <a className="link link-hover text-[#09080F99]">Order Tracking</a>
                    <a className="link link-hover text-[#09080F99]">Shipping & Delivery</a>
                    <a className="link link-hover text-[#09080F99]">Returns</a>
                </nav>
                <nav className="flex flex-col text-center">
                    <h6 className="text-[18px] font-[700] text-[#09080F]">Company</h6>
                    <a className="link link-hover text-[#09080F99]">About us</a>
                    <a className="link link-hover text-[#09080F99]">Careers</a>
                    <a className="link link-hover text-[#09080F99]">Contact</a>
                </nav>
                <nav className="flex flex-col text-center">
                    <h6 className="text-[18px] font-[700] text-[#09080F]">Legal</h6>
                    <a className="link link-hover text-[#09080F99]">Terms of service</a>
                    <a className="link link-hover text-[#09080F99]">Privacy policy</a>
                    <a className="link link-hover text-[#09080F99]">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;