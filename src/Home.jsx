import "./Home.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeTopSection from "./HomeTopSection";
import HomeBottomSection from "./HomeBottomSection";

export default function Home() {
    return <>
        <Navbar />
        <div className="main">
            <HomeTopSection />
            <HomeBottomSection />
        </div>
        <Footer />
    </>
}