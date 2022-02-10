import "./style.scss";
import React from "react";

import { useEffect, useState } from "react";
// TODO server
// import { serverAPI } from "../../../assets/js/util";
import { getPosts as getStaticPosts } from "../../assets/js/data";

import Post from "../../Atoms/Post";
import Title from "../../Atoms/Title";

const countOfrecentPosts = 2;

export default () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getStaticPosts().slice(0, countOfrecentPosts));
    }, []);

    // TODO server
    //   useEffect(() => {
    //     fetch(serverAPI + "/api/posts")
    //       .then((req) => req.json())
    //       .then((res) => setPosts(res.slice(0, countOfrecentPosts)))
    //       .catch((err) => err);
    //   }, []);

    return (
        <div className="recent-posts">
            <div className="recent-posts__title">
                <Title>Recent posts</Title>
            </div>

            <div className="recent-posts-cards">
                {posts.map((post) => (
                    <div key={post.key} className="recent-posts-list__card">
                        <Post key={post.key} {...post}></Post>
                    </div>
                ))}
            </div>
        </div>
    );
};
