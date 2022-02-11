import "./style.scss";

import { useState, useEffect } from "react";
import { serverAPI, currentRoute } from "../../assets/js/util";

import { getWorks as getStaticWorks } from "../../assets/js/data";
import { useParams } from "react-router";

const WorkDetail = () => {
    // const id = currentRoute()[3][currentRoute()[3].length-1]
    const { id } = useParams();
    const [work, setWork] = useState(getStaticWorks()[id]);

    const { title, describe, date, tag, img, html } = work ? work : {};
    return (
        <div className="work-detail">
            <div className="work-detail__header">
                <h1 className="work-detail__title">{title}</h1>

                <div className="work-detail__meta">
                    <div className="work-detail__published">
                        {date}
                    </div>

                    <div className="work-detail__hubs">
                        {tag ? tag.join(" ") : ""}
                    </div>
                </div>
            </div>

            {/* body */}
            <div className="work-body">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <div className="work-body__describe">{describe}</div>

                    <img className="work-body__image" src={img}></img>

                    <div className="work-bory__content">
                        {html
                            ? html.map((item) => <p key={item}>{item}</p>)
                            : []}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetail;
