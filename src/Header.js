import style from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={style.header}>
      <Link to={`/`}>
        <a href="https://example.com">Blog</a>
      </Link>
      <a href="https://example.com">お問い合わせ</a>
    </header>
  );
}
