import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

export default class Header extends Component {
  render() {
    return (
      <header className={style.pageHeader}>
        <button className={style.menu} />
      </header>
    );
  }
}
