import { h, Component } from "preact";

import style from "./style.css";

const ProjectHero = () => {
  return (
    <div className={style.hero}>
      <div className={style.logo} />
      <div className={style.details}>
        <h5>Jarvis</h5>
        <p>Bla Bla</p>
      </div>
    </div>
  );
};

export default ProjectHero;
