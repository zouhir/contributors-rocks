import { h, Component } from "preact";

import style from "./style.css";

const ProjectHero = ({ title = "", subtitle = "", logo = "" }) => {
  return (
    <div className={style.hero}>
      <div className={style.logo} style={{ backgroundImage: `url(${logo})` }} />
      <div className={style.details}>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectHero;
