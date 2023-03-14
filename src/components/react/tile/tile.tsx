import { useState } from "react";
import styles from "./tile.module.scss";
interface TileProps {}
const Tile: React.FC<TileProps> = (props) => {
  const [isHover, setIsHover] = useState(false);
  const te = 4;
  return (
    <div className={styles.component}>
      <div className={styles.preview}>
        <img alt="ss"></img>
      </div>
      <div className={styles.desc}>
        <h3>Title</h3>
        <p>some random description of tile to fix my height</p>
      </div>
      <div
        className={styles.tech}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {Array(3)
          .fill(null)
          .map((e) => (
            <div key={Math.random()} className={styles.techSlot}>
              <p>I</p>
              <p>Tailwias</p>
            </div>
          ))}
        {te > 3 && <p className={styles.moreIcon}>...</p>}
        {isHover && <div className={styles.moreDetail}>more</div>}
      </div>
    </div>
  );
};
export default Tile;
