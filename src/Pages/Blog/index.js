import "./style.scss";
import Post from "../../Atoms/Post";

import { useEffect, useState } from "react";

import { serverAPI } from "../../assets/js/util";
import { getPosts as getStaticPosts } from "../../assets/js/data";
import Separate from "../../Atoms/Separate";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    // const fetchPost = () => {
    //     fetch(serverAPI + "/api/posts")
    //         .then((req) => req.json())
    //         .then((res) => setPosts(res))
    //         .catch((err) => err);
    // };

    useEffect(() => {
        setPosts(getStaticPosts);
        // fetchPost();
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
