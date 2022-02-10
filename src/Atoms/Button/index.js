import './style.scss'

export default ({lable='submit', link, width= 208, height= 47}) => {
    return (
        <a href={link}>
            <button className="button" style={{height: height, width: width}}>{lable}</button>
        </a>
    );
};
