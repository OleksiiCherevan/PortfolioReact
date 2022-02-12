import { useEffect } from "react";
import "./style.scss";

export default (props) => {
    const { children, text } = props
    
    return (
        <h1 className="page-header"> {children ?? text}</h1>
    );
};
