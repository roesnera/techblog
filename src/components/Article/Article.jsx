import "./Article.css";

export default function Article({ text, author }) {

    return <div className="article">
        <div className="article-text">{text}</div>
        <div className="article-author">By: {author}</div>
    </div>
}