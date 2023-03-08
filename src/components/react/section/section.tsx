import Category from "../category/category";
import Description from "../description/desciption";
import styles from "./section.module.scss";
interface SectionProps {}
const Section: React.FC<SectionProps> = (props) => {
  return (
    <section className={styles.mainSection}>
      <Category />
      <div className={styles.content}>
        <img className={styles.border} alt="" src="/roundMain.svg" />
        <h2>{"ss"} Projects</h2>
        <Description isDesktop />
        <slot />
      </div>
      <button className={styles.goBack}>
        <div className={styles.triangle}></div>Go Back
      </button>
    </section>
  );
};
export default Section;
