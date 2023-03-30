import type { CollectionEntry } from "astro:content";
import styles from "./tile.module.scss";
interface TileProps {
  data: CollectionEntry<"projects">["data"];
  slug: CollectionEntry<"projects">["slug"];
}
const CUT_LENGTH = 60;
const Tile: React.FC<TileProps> = ({ data, slug }) => {
  const cuttedDesc =
    data.description.length > CUT_LENGTH
      ? data.description.slice(0, CUT_LENGTH) + "..."
      : data.description;
  return (
    <a className={styles.astroAncor} href={`/projects/${slug}`}>
      <div className={styles.component}>
        <div className={styles.preview}>
          <img alt="preview image" src={data?.images[0]}></img>
        </div>
        <div className={styles.desc}>
          <h3>{data.title}</h3>
          <p>{cuttedDesc}</p>
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
