import React from "react";
import { VIcon } from "../icon";
import {
  cssLogo,
  cssLogoHover,
  fastapiLogo,
  fastapiLogoHover,
  gitLogo,
  gitLogoHover,
  htmlLogo,
  htmlLogoHover,
  jsLogo,
  jsLogoHover,
  linuxLogo,
  linuxLogoHover,
  mysqlLogo,
  mysqlLogoHover,
  npmLogo,
  npmLogoHover,
  pythonLogo,
  pythonLogoHover,
  reactLogo,
  reactLogoHover,
  sassLogo,
  sassLogoHover,
  tsLogo,
  tsLogoHover,
  vsLogo,
  vsLogoHover,
  windowsLogo,
  windowsLogoHover,
  yarnLogo,
  yarnLogoHover,
  jestLogo,
  jestLogoHover,
} from "../../assets";

import styles from "./toolstech.module.scss";

enum techs {
  frontend = "frontend",
  backend = "backend",
  automation = "automation",
  tools = "tools",
}
interface Props {
  tech: techs;
}

const VToolsTech: React.FC<Props> = ({ tech }) => {
  const t: string = tech;
  const tools_object = {
    frontend: (
      <div className={styles.technologiesIcons}>
        <div className={styles.technologiesIconsRow}>
          <VIcon
            defaulIcon={reactLogo}
            onHoverIcon={reactLogoHover}
            height="55px"
            width="55px"
            name="React"
            tooltipID="react-tooltip"
          />
          <VIcon
            defaulIcon={tsLogo}
            onHoverIcon={tsLogoHover}
            height="65px"
            width="65px"
            name="TypeScript"
            tooltipID="ts-tooltip"
          />
          <VIcon
            defaulIcon={jsLogo}
            onHoverIcon={jsLogoHover}
            height="55px"
            width="55px"
            name="JavaScript"
            tooltipID="js-tooltip"
          />
          <VIcon
            defaulIcon={htmlLogo}
            onHoverIcon={htmlLogoHover}
            height="46px"
            width="46px"
            name="HTML"
            tooltipID="html-tooltip"
          />
          <VIcon
            defaulIcon={cssLogo}
            onHoverIcon={cssLogoHover}
            height="65px"
            width="65px"
            name="CSS"
            tooltipID="css-tooltip"
          />
          <VIcon
            defaulIcon={sassLogo}
            onHoverIcon={sassLogoHover}
            height="60px"
            width="60px"
            name="Sass"
            tooltipID="sass-tooltip"
          />
        </div>
      </div>
    ),
    backend: (
      <div className={styles.technologiesIcons}>
        <div className={styles.technologiesIconsRow}>
          <VIcon
            defaulIcon={pythonLogo}
            onHoverIcon={pythonLogoHover}
            height="55px"
            width="55px"
            name="Python"
            tooltipID="python-tooltip"
          />
          <VIcon
            defaulIcon={fastapiLogo}
            onHoverIcon={fastapiLogoHover}
            height="55px"
            width="55px"
            name="FastAPI"
            tooltipID="FastAPI-tooltip"
          />
          <VIcon
            defaulIcon={mysqlLogo}
            onHoverIcon={mysqlLogoHover}
            height="70px"
            width="70px"
            name="MySQL"
            tooltipID="mysql-tooltip"
          />
          <VIcon
            defaulIcon={tsLogo}
            onHoverIcon={tsLogoHover}
            height="65px"
            width="65px"
            name="TypeScript"
            tooltipID="ts-tooltip"
          />
          <VIcon
            defaulIcon={jsLogo}
            onHoverIcon={jsLogoHover}
            height="55px"
            width="55px"
            name="JavaScript"
            tooltipID="js-tooltip"
          />
        </div>
      </div>
    ),
    automation: (
      <div className={styles.technologiesIcons}>
        <div className={styles.technologiesIconsRow}>
          <VIcon
            defaulIcon={tsLogo}
            onHoverIcon={tsLogoHover}
            height="65px"
            width="65px"
            name="TypeScript"
            tooltipID="ts-tooltip"
          />
          <VIcon
            defaulIcon={pythonLogo}
            onHoverIcon={pythonLogoHover}
            height="55px"
            width="55px"
            name="Python"
            tooltipID="python-tooltip"
          />
          <VIcon
            defaulIcon={jestLogo}
            onHoverIcon={jestLogoHover}
            height="60px"
            width="60px"
            name="Jest"
            tooltipID="jest-tooltip"
          />
        </div>
      </div>
    ),
    tools: (
      <div className={styles.technologiesIcons}>
        <div className={styles.technologiesIconsRow}>
          <VIcon
            defaulIcon={npmLogo}
            onHoverIcon={npmLogoHover}
            height="65px"
            width="65px"
            name="Node Package Manager"
            tooltipID="npm-tooltip"
          />
          <VIcon
            defaulIcon={vsLogo}
            onHoverIcon={vsLogoHover}
            height="50px"
            width="50px"
            name="Visual Studio Code"
            tooltipID="vs-tooltip"
          />

          <VIcon
            defaulIcon={windowsLogo}
            onHoverIcon={windowsLogoHover}
            height="50px"
            width="50px"
            name="Windows 10"
            tooltipID="windows-tooltip"
          />
          <VIcon
            defaulIcon={linuxLogo}
            onHoverIcon={linuxLogoHover}
            height="50px"
            width="50px"
            name="Ubuntu Linux"
            tooltipID="linux-tooltip"
          />
          <VIcon
            defaulIcon={yarnLogo}
            onHoverIcon={yarnLogoHover}
            height="65px"
            width="65px"
            name="yarn"
            tooltipID="yarn-tooltip"
          />
          <VIcon
            defaulIcon={gitLogo}
            onHoverIcon={gitLogoHover}
            height="65px"
            width="65px"
            name="Git"
            tooltipID="git-tooltip"
          />
        </div>
      </div>
    ),
  };
  return tech === "backend"
    ? tools_object.backend
    : tech === "frontend"
    ? tools_object.frontend
    : tech === "automation"
    ? tools_object.automation
    : tools_object.tools;
};

export default VToolsTech;
