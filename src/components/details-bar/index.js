import { h, Component } from "preact";

import style from "./style.css";

const DetailsBar = ({ stars, subscribers }) => {
  return (
    <div className={style.detailsbar}>
      <div className={style.cell}>
        <div className={style.value}>{stars}</div>
        <div className={style.label}>STARS</div>
      </div>
      <div className={style.cell}>
        <div className={style.value}>{subscribers}</div>
        <div className={style.label}>SUBSCRIBERS</div>
      </div>
      <div className={style.cell}>
        <div className={style.value}>40</div>
        <div className={style.label}>CONTRIBUTORS</div>
      </div>
    </div>
  );
};

export default DetailsBar;
