import { useState } from "react";

export default function Navbar() {


    const [open, setOpen] =useState(false);

    function toggleNav(){
        setOpen(!open);
    }    

    const openMobileNav = <img src="../../public/icon-hamburger.svg" alt="" onClick={toggleNav} id="hamburger" />;
    const closeMobileNav = <>
        <img src="../../public/icon-close.svg" alt="" onClick={toggleNav} id="close"  />
        <ul className="nav-mobile">
            <li><a href="#">home</a></li>
            <li><a href="#">shop</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
        </ul>
        </>;

  return (
    <div className="nav-container">
        <div className="nav-mobile-container">
            {open ? closeMobileNav : openMobileNav}            
        </div>

        { (!open) && <img src="../../public/logo.svg" alt="" className="logo" />}

        <div className="nav-desk-container">
            <ul className="nav-desk">
                <li><a href="#">home</a></li>
                <li><a href="#">shop</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </div>
      
    </div>
  )
}
