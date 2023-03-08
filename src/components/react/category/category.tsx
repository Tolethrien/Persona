import SearchBox from "../searchbox/searchBox";
import styles from "./category.module.scss";
interface CategoryProps {}
const Category: React.FC<CategoryProps> = (props) => {
  return (
    <div className={styles.category}>
      <div className={styles.searchboxWrap}>
        <SearchBox />
      </div>
      <div className={styles.categoryButtons}>
        <button
          onClick={() => {
            console.log("prod");
          }}
        >
          <p>Production</p>
        </button>
        <img alt="" src="/underlineBranch.svg" />
        <button>
          <p>Development</p>
        </button>
      </div>
    </div>
  );
};
export default Category;
