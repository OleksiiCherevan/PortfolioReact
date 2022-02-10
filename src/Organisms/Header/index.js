import "./style.scss";
import { useState } from "react";

import { Link } from "react-router-dom";

import MobileMenuImage from "../../assets/img/menu/menu.png";

import DesktopItem from "../../Atoms/DesktopNavItem";
import MobileItem from "../../Atoms/MobileNavItem";
import ButtonImage from "../../Atoms/ButtonImage";

export default () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMobileMenuOpen = () => {
        setIsMobile(!isMobile);
    };

    return (
        <header className="header">
            <div className="navigation">
                <DesktopItem text="Home" to="home" />

                <DesktopItem text="Blog" to="blog" />

                <DesktopItem text="Works" to="works" />

                <DesktopItem text="Contact" to="contact" />
            </div>

            <div className="navigation-mobile">
                <ButtonImage
                    image={MobileMenuImage}
                    onClick={handleMobileMenuOpen}
                ></ButtonImage>

                {isMobile ? (
                    <div className="navigation-mobile__list">
                        <MobileItem to="home" text="Home" />

                        <MobileItem to="blog" text="Blog" />

                        <MobileItem to="works" text="Works" />

                        <MobileItem to="contact" text="Contact" />
                    </div>
                ) : null}
            </div>
        </header>
    );
};
