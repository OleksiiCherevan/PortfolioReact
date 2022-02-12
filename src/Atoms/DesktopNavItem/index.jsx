import "./style.scss";

export default (props) => {
    const { text } = props;

    return (
            <div className="desktop-nav-item">{text}</div>
    );
};
