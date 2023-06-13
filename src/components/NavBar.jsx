import menu from "/img/Menu.svg";
import logo from "/img/Logo.svg";
import Display from "./Display";
import { useState } from "react";

export default function NavBar() {
    
    const [show, setShow] = useState(false);
    let options = [
        { title: 'Home' },
        { title: 'Register' },
        { title: 'Sign In' }
    ];

    return (
        <>
        {show && <Display options={options} show={show} setShow={setShow} />}
        <nav className="z-10 flex justify-between w-full absolute ps-3 pr-5 sm:mt-3 sm:ps-3 sm:pr-5 2xl:mt-8 2xl:ps-11 2xl:pr-11">
            <img src={menu} onClick={() => setShow(!show)} className="w-14 cursor-pointer" alt="" />
            <img src={logo} className="w-14 left-3 sm:w-14 2xl:w-24" alt="" />
        </nav>
        </>
    );
}
