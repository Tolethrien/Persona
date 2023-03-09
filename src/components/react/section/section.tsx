import type { ReactNode } from "react";
import Category from "../category/category";
import Description from "../description/desciption";
import styles from "./section.module.scss";
interface SectionProps {
  currentDisplay: string;
  setCurrentDisplay: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  children?: ReactNode;
}
const Section: React.FC<SectionProps> = ({
  currentDisplay,
  setCurrentDisplay,
  searchValue,
  setSearchValue,
  children,
}) => {
  const sectionTitle = currentDisplay === "Production" ? "Ready" : "Develop";
  return (
    <section className={styles.mainSection}>
      <Category
        setCurrentDisplay={setCurrentDisplay}
        currentDisplay={currentDisplay}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className={styles.content}>
        <img className={styles.border} alt="" src="/roundMain.svg" />
        <h2>{sectionTitle} Projects</h2>
        <Description isDesktop />
        <div className={styles.childrenSlot}>{children}</div>
      </div>
      <button className={styles.goBack}>
        <div className={styles.triangle}></div>Go Back
      </button>
    </section>
  );
};
export default Section;
