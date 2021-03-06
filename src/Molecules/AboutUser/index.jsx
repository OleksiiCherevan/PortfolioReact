import "./style.scss";
import { useState, useEffect } from "react";

import { serverAPI } from "../../assets/js/util";
import { getAboutUser } from "../../assets/js/data";

import ContactPhoto from "../../Atoms/UserPhoto/index";
import UserDescripiton from "../../Atoms/UserDescripiton/index";
import UserPhoto from "../../Atoms/UserPhoto/index";

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
            <ContactPhoto photo = {userInfo.userPhoto}></ContactPhoto>
            </div>
        </div>
    );
};

export default HomeAbout;
