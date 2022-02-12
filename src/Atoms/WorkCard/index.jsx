import "./style.scss";


import LinkGet from "../LinkGet/index";
import { Link } from "react-router-dom";

const WorkCard = (props) => {
    const {
        id = 1,
        title = "",
        date = "",
        tag = [""],
        describe = "",
        workImage = "",
    } = props;
    
    return (
        <div className="work-card">
            <div className="work-card__image">
                <img alt="img" src={workImage}></img>
            </div>

            <div className="work-card__details">
                <Link to={`/work/${id}`}>
                <div
                    className="work-card__title margin-bottom"
                >
                    {title}
                </div>
                </Link>

                <div className="work-card__metadata margin-bottom">
                    <div className="work-card__date">{date}</div>
                    <div className="work-card__tag">
                        {Array.isArray(tag) ? tag.join(", ") : tag}
                    </div>
                </div>

                <div className="work-card__describe margin-bottom">
                    {describe}
                </div>

                <LinkGet></LinkGet>
            </div>
        </div>
    );
};

export default WorkCard;
