import SearchBox from "../searchbox/searchBox";
import Description from "../description/desciption";
import styles from "./mobileTopBar.module.scss";
const MobileTopBar = () => {
  return (
    <div className={styles.mobileTopBar}>
      <SearchBox />
      <Description />
      <img className={styles.border} alt="" src="/appIcons/border.svg" />
    </div>
  );
};
export default MobileTopBar;
