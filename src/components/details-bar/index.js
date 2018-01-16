import { h, Component } from "preact";

import style from "./style.css";

const DetailsBar = () => {
  return (
    <div className={style.detailsbar}>
      <div className={style.cell}>
        <div className={style.value}>2500</div>
        <div className={style.label}>STARS</div>
      </div>
      <div className={style.cell}>ss</div>
      <div className={style.cell}>ss</div>
    </div>
  );
};

export default DetailsBar;
