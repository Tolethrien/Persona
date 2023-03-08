import styles from "./searchBox.module.scss";
interface SearchBoxProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBox: React.FC<SearchBoxProps> = ({
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className={styles.searchBox}>
      <img alt="" src="/Loop.svg" />
      <input
        type="text"
        value={searchValue}
        placeholder="search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
