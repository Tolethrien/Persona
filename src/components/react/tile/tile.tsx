import type { CollectionEntry } from "astro:content";
import styles from "./tile.module.scss";
import { capitalize } from "../../utils/utilsFunc";
import { useFragmentValue } from "../stateManager/fragment";
import { searchValueFragment } from "../stores/fragments";
import { useMemo } from "react";
interface TileProps {
  data: CollectionEntry<"projects">["data"];
  slug: CollectionEntry<"projects">["slug"];
}
const CUT_LENGTH = 60;

const Tile: React.FC<TileProps> = ({ data, slug }) => {
  const searchValue = useFragmentValue(searchValueFragment);

  const cuttedDesc = useMemo(() => {
    return data.description.length > CUT_LENGTH
      ? data.description.slice(0, CUT_LENGTH) + "..."
      : data.description;
  }, [data.description]);

  const filterByTags = (e: string) =>
    e.toLowerCase().includes(searchValue.toLowerCase().slice(1));

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
          {data.tags
            .filter(filterByTags)
            .filter((_, i) => i < 3)
            .map((tag) => (
              <div className={styles.tag}>
                <img src={`/techIcons/${tag.toLowerCase()}.svg`} alt="" />
                <p>{capitalize(tag)}</p>
              </div>
            ))}
          {data.tags.length > 3 && <p className={styles.moreIcon}>...</p>}
        </div>
      </div>
    </a>
  );
};
export default Tile;
