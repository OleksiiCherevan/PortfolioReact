import "./style.scss";
import React from "react";

import { useEffect, useState } from "react";
import { getPosts as getStaticPosts } from "../../assets/js/data";

import Post from "../../Atoms/Post/index";
import Title from "../../Atoms/Title";

const countOfrecentPosts = 2;

export default () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getStaticPosts().slice(0, countOfrecentPosts));
    }, []);
    
    return (
        <div className="recent-posts">
            <div className="recent-posts__title">
                <Title>Recent posts</Title>
            </div>

            <div className="recent-posts-cards">
                {posts.map((post) => (
                    <div key={post.key} className="recent-posts__card">
                        <Post {...post}></Post>
                    </div>
                ))}
            </div>
        </div>
    );
};
