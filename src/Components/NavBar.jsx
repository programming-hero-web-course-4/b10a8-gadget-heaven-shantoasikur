import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const navbarClass = isHomePage ? "bg-purple-500 text-white w-[90%] mx-auto rounded-t-[20px]" : "bg-white text-purple-500 mt-[-20px]";
    return (
        <div className={`navbar ${navbarClass}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/offers">Offers</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/offers">Offers</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2 items-center">
                    <a className="btn"><i className="fa-solid fa-cart-shopping"></i></a>
                    <a className="btn"><i className="fa-regular fa-heart"></i></a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;