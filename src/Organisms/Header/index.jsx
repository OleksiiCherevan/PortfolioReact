import "./style.scss";
import { useState } from "react";

import { Link } from "react-router-dom";

import MobileMenuImage from "../../assets/img/menu/menu.png";

import DesktopItem from "../../Atoms/DesktopNavItem/index";
import MobileItem from "../../Atoms/MobileNavItem/index";
import ButtonImage from "../../Atoms/ButtonImage/index";

export default () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMobileMenuOpen = () => {
        setIsMobile(!isMobile);
    };

    return (
        <header className="header">
            <div className="navigation">
                <Link to="/home">
                    <DesktopItem text="Home" />
                </Link>
                <Link to="/blog">
                    <DesktopItem text="Blog"  />
                </Link>
                <Link to="/works">
                    <DesktopItem text="Works"  />
                </Link>
                <Link to="/contact">
                    <DesktopItem text="Contact"  />
                </Link>
            </div>

            <div className="navigation-mobile">
                <ButtonImage
                    image={MobileMenuImage}
                    onClick={handleMobileMenuOpen}
                ></ButtonImage>

                {isMobile ? (
                    <div className="navigation-mobile__list">
                        <Link to="/home">
                            <MobileItem  text="Home" />
                        </Link>
                        <Link to="/blog">
                            <MobileItem  text="Blog" />
                        </Link>
                        <Link to="/works">
                            <MobileItem  text="Works" />
                        </Link>
                        <Link to="/contact">
                            <MobileItem  text="Contact" />
                        </Link>
                    </div>
                ) : null}
            </div>
        </header>
    );
};
