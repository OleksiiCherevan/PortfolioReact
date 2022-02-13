import "./style.scss";

import LinkGet from "../LinkGet/index";
import { Link } from "react-router-dom";

const WorkCard = (props) => {
    const {
        id = 1,
        title = "",
        date = "",
        tag = [""],
        description = "",
        workImage = "",
        urlApp ='',
    } = props;

    return (
        <div className="work-card">
            <div className="work-card__image">
                <img alt="img" src={workImage}></img>
            </div>

            <div className="work-card__details">
                <Link to={`/work/${id}`}>
                    <div className="work-card__title margin-bottom">
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
                    {description}
                </div>

                <a href={urlApp}>
                <LinkGet></LinkGet>
                </a>
            </div>
        </div>
    );
};

export default WorkCard;
