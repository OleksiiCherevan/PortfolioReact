import "./style.scss";

const Post = (props) => {
    const { header, url, date, tag, description } = props;

    return (
        <div className="post">
            <div className="post__header">{header}</div>

            <div className="post-meta">
                <div className="post-meta__date">{date}</div>

                <div className="post-meta__topic">
                    {Array.isArray(tag) ? tag.join(", ") : tag}
                </div>
            </div>

            <div className="post-description">{description}</div>
        </div>
    );
};

export default Post;
