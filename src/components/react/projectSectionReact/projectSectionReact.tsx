import type { MarkdownInstance } from "astro";
import { useState } from "react";
import Description from "../description/desciption";
import SearchBox from "../searchbox/searchBox";
import Section from "../section/section";
import Tile from "../tile/tile";
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
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        {/* {projects
          .filter((p) => p.frontmatter.title.includes(searchValue))
          .map((p) => (
            <a
              key={Math.random()}
              href={`/dynamic/${p.frontmatter.title}`}
              className={styles.tra}
            >
              <div
                style={{
                  border: "1px solid black",
                  width: "100px",
                  height: "100px",
                }}
              >
                <p style={{ color: "white" }}>{p.frontmatter.title}</p>
              </div>
            </a>
          ))} */}
      </Section>
    </>
  );
};
export default ProjectsReactSection;
