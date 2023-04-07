import SearchBox from "../searchbox/searchBox";
import { useFragment } from "../stateManager/fragment";
import { DisplayedWindowFragment } from "../stores/fragments";
import styles from "./category.module.scss";
interface CategoryProps {}
const Category: React.FC<CategoryProps> = ({}) => {
  const [displayedWindow, setDisplayedWindow] = useFragment(
    DisplayedWindowFragment
  );

  return (
    <div className={styles.category}>
      <div className={styles.searchboxWrap}>
        <SearchBox />
      </div>
      <div className={styles.categoryButtons}>
        <button
          onClick={() => {
            setDisplayedWindow("Production");
          }}
        >
          <p
            className={
              displayedWindow === "Production" ? styles.isSelected : undefined
            }
          >
            Production
          </p>
        </button>
        <img alt="" src="/appIcons/underlineBranch.svg" />
        <button
          onClick={() => {
            setDisplayedWindow("Development");
          }}
        >
          <p
            className={
              displayedWindow === "Development" ? styles.isSelected : undefined
            }
          >
            Development
          </p>
        </button>
      </div>
    </div>
  );
};
export default Category;
