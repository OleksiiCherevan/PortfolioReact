import "./style.scss";

import Button from "../Button/index";
import { serverAPI } from "../../assets/js/util";

export default (props) => {
    const { name, profesion, text } = props;

    return (
        <div className="user-description">
            <div className="user-description__name">
                Hi, I am {name},
                <br />
                {profesion}
            </div>

            <div className="user-description__text">{text}</div>

            <a href={serverAPI + "/files/cherevan.pdf"}>
                <Button lable={"Download Resume"}></Button>
            </a>
        </div>
    );
};
