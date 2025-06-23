import { Link } from "react-router-dom";

/**
 * Heade component
 */
function Header() {
    return(
        <>
        <div className="navbar bg-stone-50 border-b">
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li>
                            <a>Business</a>
                            <ul className="p-2">
                                <li><a>DPNG</a></li>
                                <li><a>CNG</a></li>
                                <li><a>CPNG</a></li>
                                <li><a>IPNG</a></li>
                            </ul>
                        </li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Megha Gas&reg;</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li>
                        <details>
                            <summary>Business</summary>
                            <ul className="p-2">
                                <li><a>Domestic PNG</a></li>
                                <li><a>CNG</a></li>
                                <li><a>Commercial PNG</a></li>
                                <li><a>Industrial PNG</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="/users">Users</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/login" className="me-3">Login</a>
                <a href="/register">Register</a>
            </div>
        </div>
        </>
    );
}

export default Header;