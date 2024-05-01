import styles from "../app/page.module.css";
import Main from "./components/Main";
import Advantages from "./components/Advantages1";
import Popular from "./components/Popular";
import OurWork from "./components/OurWork";
import PopularArticle from "./components/PopularArticle";
import Questions from "./components/Questions";



export default function Home() {
  return (
    <>
   <Main/>
   <Advantages/>
   <Popular/>
   <OurWork/>
   <PopularArticle/>
   <Questions/>
    </>
  );
}
