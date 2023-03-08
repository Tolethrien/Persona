import SearchBox from "../searchbox/searchBox";
import styles from "./category.module.scss";
interface CategoryProps {
  currentDisplay: string;
  setCurrentDisplay: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
const Category: React.FC<CategoryProps> = ({
  setCurrentDisplay,
  currentDisplay,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className={styles.category}>
      <div className={styles.searchboxWrap}>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={styles.categoryButtons}>
        <button
          onClick={() => {
            setCurrentDisplay("Production");
          }}
        >
          <p
            className={
              currentDisplay === "Production" ? styles.isSelected : undefined
            }
          >
            Production
          </p>
        </button>
        <img alt="" src="/underlineBranch.svg" />
        <button
          onClick={() => {
            setCurrentDisplay("Development");
          }}
        >
          <p
            className={
              currentDisplay === "Development" ? styles.isSelected : undefined
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
