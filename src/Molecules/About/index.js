import "./style.scss";
import { useState, useEffect } from "react";

import { serverAPI } from "../../assets/js/util";
import { getAboutUser } from "../../assets/js/data";

import Button from "../../Atoms/Button";
import ContactPhoto from "../../Atoms/UserPhoto";

const HomeAbout = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    setUserInfo(getAboutUser());
  };

  return (
    <div className="about about_position">
      
      <div className="about-description about-description_position">
        <pre className="about-description__name">
          Hi, I am {userInfo.name},
        </pre>

        <div className="about-description__profesion">
          {userInfo.profesion}
        </div>

        <div className="about-description__text">{userInfo.text}</div>


        <Button lable={'Download Resume'} link={serverAPI + "/files/cherevan.pdf"}></Button>
      </div>

      <ContactPhoto photo={userInfo.photo}></ContactPhoto>

    </div>
  );
};

export default HomeAbout;
