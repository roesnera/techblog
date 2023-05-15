import styles from './page.module.css'
import HomeTopSection from "./HomeTopSection";
import HomeBottomSection from "./HomeBottomSection";


export default function Home() {
    console.log("Home called");
  return ( <>
        <div className="main">
            <HomeTopSection />
            <HomeBottomSection />
        </div>
    </>)
}
