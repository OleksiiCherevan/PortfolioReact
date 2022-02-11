import "./style.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router";

import ReactHtmlParser from 'react-html-parser'
import { serverAPI, currentRoute } from "../../assets/js/util";
import { getWorks as getStaticWorks } from "../../assets/js/data";

const WorkDetail = (props) => {
    // const { title, describe, date, tag, img, html } = props;

    const { id } = useParams();
    const [work, setWork] = useState(getStaticWorks()[id]);
    // i`will change it soon
    const { title, describe, date, tag, img, html } = work

    return (
        <div className="work-detail">
            
            {/* header */}
            <div className="work-header">
                <h1 className="work-header__title">{title}</h1>

                <div className="work-header__meta">
                    <div className="work-header__published">
                        {date}
                    </div>

                    <div className="work-header__hubs">
                        {tag ? tag.join(" ") : ""}
                    </div>
                </div>
            </div>

            {/* body */}
            <div className="work-body">
                    <div className="work-body__describe">{describe}</div>

                    <img className="work-body__image" src={img}></img>

                    <div className="work-bory__content">
                        { ReactHtmlParser(html) }
                    </div>

            </div>
        </div>
    );
};

export default WorkDetail;
