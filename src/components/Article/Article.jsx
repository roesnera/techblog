import "./Article.css";

export default function Article({ text, author, title }) {

    return <div className="article">
            <figure className="article--row article--row__1 article-img"></figure>
            <div className="article--row article--row__2 article-title">{title}</div>
        <div className="article--row article--row__3 article-text">{text}</div>
        <div className="article--row article--row__4 article-author">By: {author}</div>
        <div className="article--row article--row__5">
            <div className="article--row__5__views">Views</div>
            <div className="article--row__5__likes">Likes</div>
        </div>
    </div>
}