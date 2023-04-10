import type { ReactNode } from "react";
import Category from "../category/category";
import Description from "../description/desciption";
import { useFragmentValue } from "../stateManager/fragment";
import { DisplayedWindowFragment } from "../stores/fragments";
import styles from "./section.module.scss";
interface SectionProps {
  children?: ReactNode;
}
const Section: React.FC<SectionProps> = ({ children }) => {
  const displayedWindow = useFragmentValue(DisplayedWindowFragment);

  return (
    <section className={styles.mainSection}>
      <Category />
      <div className={styles.content}>
        <img className={styles.border} alt="" src="/appIcons/border.svg" />
        <h2>{displayedWindow} Projects</h2>
        <Description isDesktop />
        <div className={styles.childrenSlot}>{children}</div>
      </div>
    </section>
  );
};
export default Section;
