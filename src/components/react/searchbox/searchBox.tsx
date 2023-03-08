import styles from "./searchBox.module.scss";
interface SearchBoxProps {}
const SearchBox: React.FC<SearchBoxProps> = (props) => {
  return (
    <div className={styles.searchBox}>
      <img alt="" src="/Loop.svg" />
      <input type="text" placeholder="search..." />
    </div>
  );
};
export default SearchBox;
