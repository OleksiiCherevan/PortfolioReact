import "./style.scss";

export default (props) => {
    const { text, children } = props

    return <div className="title">{text || children}</div>;
};
