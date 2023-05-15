import styles from './page.module.css'
import HomeTopSection from "./(components)/HomeTopSection";
import HomeBottomSection from "./(components)/HomeBottomSection";


export default function Home() {
    console.log("Home called");
  return ( <>
        <div className="main">
            <HomeTopSection />
            <HomeBottomSection />
        </div>
    </>)
}
