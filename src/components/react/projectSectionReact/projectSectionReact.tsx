import Description from "../description/desciption";
import SearchBox from "../searchbox/searchBox";
import Section from "../section/section";
import styles from "./projectSectionReact.module.scss";
interface ProjectsReactSectionProps {}
const ProjectsReactSection: React.FC<ProjectsReactSectionProps> = (props) => {
  return (
    <>
      <div className={styles.mobileTopBar}>
        <SearchBox />
        <Description />
      </div>
      <Section>{/* <SearchReact client:load /> */}</Section>
    </>
  );
};
export default ProjectsReactSection;
