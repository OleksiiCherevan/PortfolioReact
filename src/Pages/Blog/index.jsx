import "./style.scss";

import { serverAPI } from "../../assets/js/util";
import { useEffect, useState } from "react";
import { getPosts as getStaticPosts } from "../../assets/js/data";

import Post from "../../Atoms/Post/index";
import Separate from "../../Atoms/Separate/index";
import PageHeader from "../../Atoms/PageHeader";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getStaticPosts);
    }, []);

    return (
        <div className="blog">
            <PageHeader>Blog</PageHeader>
            
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
