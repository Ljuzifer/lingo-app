import { Link } from "react-router-dom";
import css from "./Header.module.css";
import sprite from "images/InlineSprite.svg";
import NavMenu from "./NavMenu/NavMenu";
import BtnAuth from "./BtnAuth/BtnAuth";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.thumb}>
        <Link className={css.logo} to={"/"}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#ukraine`} />
            <use xlinkHref={`${sprite}#logo-books`} />
          </svg>
          <p className={css.logo_title}>LearnLingo</p>
        </Link>
        <NavMenu />
        <BtnAuth />
      </div>
    </header>
  );
}
