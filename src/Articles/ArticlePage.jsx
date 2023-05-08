import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Article from "../components/Article";
import HomeBottomSection from "../HomeBottomSection/HomeBottomSection";
import "./ArticlePage.css";

export default function ArticlePage() {
    return <>
        <Navbar />
        <div className="articles-container">
            <HomeBottomSection />
        </div>
        <Footer />
    </>
}