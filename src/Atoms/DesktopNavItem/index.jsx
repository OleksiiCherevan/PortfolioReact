import { Link } from "react-router-dom";
import "./style.scss";

export default (props) => {
    const { text, to } = props;

    return (
        <a className="desktop-nav-item" href={to}> 
            {text}
        </a>
    )    
};
