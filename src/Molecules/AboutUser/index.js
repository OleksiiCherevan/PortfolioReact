import "./style.scss";
import { useState, useEffect } from "react";

import { serverAPI } from "../../assets/js/util";
import { getAboutUser } from "../../assets/js/data";

import Button from "../../Atoms/Button";
import ContactPhoto from "../../Atoms/UserPhoto";
import UserDescripiton from "../../Atoms/UserDescripiton";

const HomeAbout = () => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = () => {
        setUserInfo(getAboutUser());
    };

    return (
        <div className="about-user">
            <UserDescripiton {...userInfo}></UserDescripiton>

            <div className="about-user__user-photo">
            <ContactPhoto {...userInfo}></ContactPhoto>
            </div>
        </div>
    );
};

export default HomeAbout;
