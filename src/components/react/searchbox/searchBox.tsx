import { useFragment } from "../stateManager/fragment";
import { searchValue as store } from "../stores/fragments";
import styles from "./searchBox.module.scss";
interface SearchBoxProps {}
const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  // const { searchValue, setSearchValue } = useContext(store)!;
  const [searchValue, setSearchValue] = useFragment(store);

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
