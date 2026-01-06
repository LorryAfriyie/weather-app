import { DropdownIcon, UnitIcon } from "./svg.tsx";

const Dropdown = () => (
  <div className={"dropdown"}>
    <DropdownOptionDisplay />
    <DropdownMenu />
  </div>
);

const DropdownOptionDisplay = () => (
  <div className={"dropdown__option"}>
    <UnitIcon />
    <p>Units</p>
    <DropdownIcon />
  </div>
);

const DropdownMenu = () => (
  <div className={"dropdown__menu"}>Dropdown Content</div>
);

export default Dropdown;
