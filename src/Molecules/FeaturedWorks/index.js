import "./style.scss";

import { useState, useEffect } from "react";

import { serverAPI } from "../../assets/js/util";
import { getWorks as getStaticWorks } from "../../assets/js/data";

import WorkCard from "../../Atoms/WorkCard";
import Title from "../../Atoms/Title";
import Separate from "../../Atoms/Separate";

const countOfFeaturedWorks = 3;

const FeaturedWorks = () => {
    const [works, setWorks] = useState([]);

    const fetchWorks = () => {
        setWorks(getStaticWorks());
        // fetch(serverAPI + "/api/works")
        //     .then((req) => req.json())
        //     .then((res) => setWorks(res.slice(0, countOfFeaturedWorks)))
        //     .catch((err) => err);
    };

    useEffect(() => {
        fetchWorks();
    }, []);

    return (
        <div className="featured-works">
            <div className="featured-works__title">
                <Title>Featured works</Title>
            </div>

            <div className="featured-works__cards">
                {works.map((work) => (
                    <div className="featured-works__card" key={work.id}>
                        <WorkCard {...work}></WorkCard>
                        <div className="featured-works__card-separate">
                            <Separate></Separate>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedWorks;
