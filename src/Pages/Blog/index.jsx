import "./style.scss";

import { serverAPI } from "../../assets/js/util";
import { useEffect, useState } from "react";
import { getPosts as getStaticPosts } from "../../assets/js/data";

import Post from "../../Atoms/Post/index.js";
import Separate from "../../Atoms/Separate/index";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getStaticPosts);
    }, []);

    return (
        <div className="blog">
            <h1 className="blog__label">Blog</h1>
            <div className="blog__body">
                {posts.map((post) => (
                    <div className="blog__card" key={post.key}>
                        <Post {...post}></Post>
                        <Separate></Separate>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
