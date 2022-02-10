import "./style.scss";

export default (props) => {
    const { image, to, onClick, width = 30, height = 30 } = props;

    return (
        <a
            className="button-image"
            href={to}
            
            style={{ height: height, width: width }}
            onClick={(event) => onClick(event)}
        >
            <img
                className="button-image__image"
                src={image}
            />
        </a>
    );
};
