import { h, Component } from "preact";
import style from "./style";

import ProjectHero from "../../components/project-hero";
import DetailsBar from "../../components/details-bar";
import Card from "../../components/contributor-card";

export default class Profile extends Component {
  state = {};

  // gets called when this route is navigated to
  componentDidMount() {}

  // Note: `user` comes from the URL, courtesy of our router
  render({ user, repo }) {
    return (
      <div class={style.profile}>
        <ProjectHero />
        <DetailsBar />
        <div className={style.container}>
          <div className={style.wrapper}>
            <Card />
          </div>
          <div className={style.wrapper}>
            <Card />
          </div>
          <div className={style.wrapper}>
            <Card />
          </div>
          <div className={style.wrapper}>
            <Card />
          </div>
        </div>
      </div>
    );
  }
}
