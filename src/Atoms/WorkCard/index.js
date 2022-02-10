import React, { useEffect } from "react";
import "./style.scss";

import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Separate from "../Separate";

const WorkCard = (props) => {
    const {
        id = 1,
        title = "",
        date = "",
        tag = [""],
        describe = "",
        img = "",
    } = props;
    return (
        <div className="work-card">
            <div className="work-card__image">
                <img alt="img" src={img}></img>
            </div>

            <div className="work-card__details">
                <div className="work-card__title margin-bottom" href={`/work-card/${id}`}>
                    {title}
                </div>

                <div className="work-card__metadata margin-bottom">
                    <div className="work-card__date">{date}</div>
                    <div className="work-card__tag">
                        {Array.isArray(tag) ? tag.join(", ") : tag}
                    </div>
                </div>

                <div className="work-card__describe margin-bottom">
                    {describe}
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
