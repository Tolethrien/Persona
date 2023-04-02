import { useFragment } from "../stateManager/fragment";
import { searchValueFragment } from "../stores/fragments";
import styles from "./searchBox.module.scss";
interface SearchBoxProps {}
const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  const [searchValue, setSearchValue] = useFragment(searchValueFragment);

  return (
    <div className={styles.searchBox}>
      <img
        alt=""
        src={
          searchValue[0] === "#" ? "/appIcons/hash.svg" : "/appIcons/Loop.svg"
        }
      />
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
