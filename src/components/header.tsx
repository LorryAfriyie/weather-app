import { Logo } from "./svg.tsx";
import Dropdown from "./dropdown.tsx";

const Header = () => (
  <header className={"header primary-font-color"}>
    <div className={"header__logo"}>
      <Logo />
    </div>

    <Dropdown />
  </header>
);

export { Header };
