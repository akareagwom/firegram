import { Link } from "react-router-dom";
import hamburger from '../images/hamburger2.png';
import { useState } from "react";
const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    return ( 
        <div>
             <nav className="text-orange-300 flex  justify-between">
                <div>
                <h1>ZAMYEN STUDIOS</h1>
                </div>
                {showNav&&<div  className="justify-between mr-10 ">
                    <button  onClick={() => setShowNav(!showNav)} className="md:hidden">
                        <img src={hamburger} alt="" className="cursor-pointer" />
                    </button>
                    <div  className="hidden md:flex items-center space-x-1">
                        <Link className="ml-10">HOME</Link>
                        <Link className="ml-10">GALLERY</Link>
                        <Link className="ml-10">ABOUT</Link>
                        <Link className="ml-10">CONTACT</Link>
                    </div>
                   
                </div>}
            </nav>
        </div>
     );
}
 
export default Navbar;