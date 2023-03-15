import type { CollectionEntry } from "astro:content";
import Description from "../description/desciption";
import SearchBox from "../searchbox/searchBox";
import Section from "../section/section";
import { useFragmentValue } from "../stateManager/fragment";
import {
  DisplayedWindowFragment,
  searchValueFragment,
} from "../stores/fragments";
import Tile from "../tile/tile";
import styles from "./projectSectionReact.module.scss";
interface ProjectsReactSectionProps {
  content: CollectionEntry<"games">[] | CollectionEntry<"projects">[];
}
const ProjectsReactSection: React.FC<ProjectsReactSectionProps> = (props) => {
  const content = props.content as CollectionEntry<"projects">[];

  const displayedWindowValue = useFragmentValue(DisplayedWindowFragment);
  const searchValue = useFragmentValue(searchValueFragment);

  const filterByDone = (value: CollectionEntry<"projects">) => {
    return displayedWindowValue === "Development"
      ? !value.data.done
      : value.data.done;
  };
  const filterBySearch = (value: CollectionEntry<"projects">) => {
    return value.data.title.includes(searchValue);
  };

  return (
    <>
      {/* mobile bar pulled out of section */}
      <div className={styles.mobileTopBar}>
        <SearchBox />
        <Description />
      </div>
      <Section>
        {content
          .filter(filterByDone)
          .filter(filterBySearch)
          .map((project) => (
            <Tile key={Math.random()} data={project.data} slug={project.slug} />
          ))}
      </Section>
    </>
  );
};
export default ProjectsReactSection;
