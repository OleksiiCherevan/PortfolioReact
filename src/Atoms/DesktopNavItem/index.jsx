import "./style.scss";

import { Link } from "react-router-dom";

export default (props) => {
    const { text } = props;

    return (
            <div className="desktop-nav-item">{text}</div>
    );
};
