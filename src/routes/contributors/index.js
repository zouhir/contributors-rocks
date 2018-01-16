import { h, Component } from "preact";
import style from "./style";

import ProjectHero from "../../components/project-hero";
import DetailsBar from "../../components/details-bar";
import Card from "../../components/contributor-card";

import fetch from "../../util/fetch";

export default class Profile extends Component {
  state = {
    loading: true,
    name: "",
    description: "",
    stars: 0,
    subscribers: 0,
    contributors: [],
    avatar: ""
  };

  // gets called when this route is navigated to
  componentDidMount() {
    fetch.getRepoDetails(this.props.user, this.props.repo).then(data => {
      if (data) {
        this.setState({
          name: data.name,
          description: data.description,
          stars: data.stargazers_count,
          subscribers: data.subscribers_count,
          avatar: data.owner["avatar_url"],
          loading: false
        });
      }
    });
  }

  // Note: `user` comes from the URL, courtesy of our router
  render(
    { user, repo },
    { loading, description, name, avatar, stars, subscribers }
  ) {
    if (loading) {
      return (
        <div className={style.loading}>
          <div className={style.animate} />
        </div>
      );
    }

    return (
      <div class={style.page}>
        <ProjectHero title={name} subtitle={description} logo={avatar} />
        <DetailsBar stars={stars} subscribers={subscribers} />
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
