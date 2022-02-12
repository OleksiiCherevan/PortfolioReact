import "./style.scss";

export default (props) => {
    const { lable = "submit", width = 208, height = 47 } = props
    return (
            <button className="button" style={{ height: height, width: width }}>
                {lable}
            </button>
    );
};
