import "./style.scss";

export default (props) => {
    const { text, to } = props;

    return (
        <a className="mobile-nav-item" href={to}> 
            {text}
        </a>
    )    
};
