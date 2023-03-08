import type { MarkdownInstance } from "astro";
import { useState } from "react";
import Description from "../description/desciption";
import SearchBox from "../searchbox/searchBox";
import Section from "../section/section";
import styles from "./projectSectionReact.module.scss";
interface ProjectsReactSectionProps {
  projects: MarkdownInstance<Record<string, any>>[];
}
const ProjectsReactSection: React.FC<ProjectsReactSectionProps> = ({
  projects,
}) => {
  const [currentDisplay, setCurrentDisplay] = useState("Production");
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      {/* mobile bar pulled out of section */}
      <div className={styles.mobileTopBar}>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <Description />
      </div>
      <Section
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      >
        {projects
          .filter((p) => p.frontmatter.title.includes(searchValue))
          .map((p) => (
            <p key={Math.random()} style={{ color: "white" }}>
              {p.frontmatter.title}
            </p>
          ))}
      </Section>
    </>
  );
};
export default ProjectsReactSection;
