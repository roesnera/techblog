import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Article from "../components/Article";
import "./ArticlePage.css";

export default function ArticlePage() {
    return <>
        <Navbar />
        <div className="articles-container">
            <Article />
        </div>
        <Footer />
    </>
}