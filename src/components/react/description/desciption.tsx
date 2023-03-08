import styles from "./description.module.scss";
interface DescriptionProps {
  isDesktop?: boolean;
}
const Description: React.FC<DescriptionProps> = ({ isDesktop = false }) => {
  return (
    <div
      className={
        !isDesktop ? styles.desc : `${styles.desc} ${styles.descDesktop}`
      }
    >
      <p>you can search them by name or #Tags based on usage or technology</p>
    </div>
  );
};
export default Description;
