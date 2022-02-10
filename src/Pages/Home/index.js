import "./style.scss";

import About from "../../Molecules/AboutUser";
import RecentPosts from "../../Molecules/RecentPosts";
import FeaturedWorks from "../../Molecules/FeaturedWorks";

const Home = () => {
    return (
        <div className="home">
            <div className="home__about">
                <About></About>
            </div>
            <div className="home__recent-posts">
                <RecentPosts></RecentPosts>
            </div>
            <div className="home__featured-works">
                <FeaturedWorks></FeaturedWorks>
            </div>
        </div>
    );
};

export default Home;
