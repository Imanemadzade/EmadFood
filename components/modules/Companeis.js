import styles from "./Companeis.module.css";

import Apple from "../icons/Apple";
import SpaceX from "../icons/SpaceX";
import Binance from "../icons/Binance";
import Tesla from "../icons/Tesla";

function Companeis() {
  return (
    <div className={styles.container}>
      <div>
        <Apple />
        <SpaceX />
        <Binance />
        <Tesla />
      </div>
    </div>
  );
}

export default Companeis;
