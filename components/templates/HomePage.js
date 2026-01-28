import styles from "./HomePage.module.css";
import Banner from "../modules/Banner";
import Attributes from "../modules/Attributes";
import Definition from "../modules/Definition";
import Companeis from "../modules/Companeis";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companeis />
    </div>
  );
}

export default HomePage;
