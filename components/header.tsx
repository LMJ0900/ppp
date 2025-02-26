'use client'

import classes from "@/style/header.module.css"
import { useEffect, useRef } from "react";

function importIcon(){
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/a74d5e1b24.js";
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
    }, []);
}

export default function Header(){
    importIcon()
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);
    const logo2Ref = useRef<HTMLUListElement>(null);
    
    useEffect(() => {
        const button = buttonRef.current;
        const menu = menuRef.current;
        const logo2 = logo2Ref.current;

        if (!button || !menu || !logo2) return;

        const toggleMenu = () => {
            menu.classList.toggle(classes.active); // Next.js CSS 모듈 적용
            logo2.classList.toggle(classes.active);
        };

        button.addEventListener("click", toggleMenu);
        
        // Cleanup 함수: 이벤트 리스너 제거
        return () => button.removeEventListener("click", toggleMenu);
    }, []);
    return(<>
        <nav className={classes.header}>
            <div className={classes.logo}>
                <a href="#">
                    <i>

                    </i>
                    <h2>
                        DreamCoading
                    </h2>
                </a>
            </div>
            <ul className={classes.menu} ref={menuRef}>
                <li><a href="">home</a></li>
                <li><a href="">aaaaa</a></li>
                <li><a href="">sssss</a></li>
                <li><a href="">ddddd</a></li>
                <li><a href="">fffff</a></li>
            </ul>
            <ul className={classes.logo2} ref={logo2Ref}>
                <li>
                    <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <button className={classes.mainButton} ref={buttonRef}>
        <i className="fa-solid fa-bars"></i>
        </button>
    </>)
}