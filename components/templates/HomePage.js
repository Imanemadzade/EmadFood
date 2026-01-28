import styles from "./HomePage.module.css";
import Banner from "../modules/Banner";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
}

export default HomePage;
