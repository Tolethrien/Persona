import type { CollectionEntry } from "astro:content";
import styles from "./tile.module.scss";
interface TileProps {
  data: CollectionEntry<"projects">["data"];
  slug: CollectionEntry<"projects">["slug"];
}
const Tile: React.FC<TileProps> = ({ data, slug }) => {
  const te = 4;
  return (
    <a className={styles.astroAncor} href={`/${slug}`}>
      <div className={styles.component}>
        <div className={styles.preview}>
          <img alt="preview image" src={data?.images[0]}></img>
        </div>
        <div className={styles.desc}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div className={styles.tech}>
          {data.tags.map((e) => (
            <div key={Math.random()} className={styles.techSlot}>
              <p>{e}</p>
            </div>
          ))}
          {data.tags.length > 3 && <p className={styles.moreIcon}>...</p>}
        </div>
      </div>
    </a>
  );
};
export default Tile;
