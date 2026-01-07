import { DropdownIcon, UnitIcon } from "./svg.tsx";
import { useEffect, useRef } from "react";

const Dropdown = () => (
  <div className={"dropdown"}>
    <DropdownOptionDisplay />
    <DropdownMenu />
  </div>
);

const DropdownOptionDisplay = () => {
  const test = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    test.current?.addEventListener("click", () => alert("Hello"));
  }, [test]);

  return (
    <div className={"dropdown__option"}>
      <UnitIcon />
      <p className={"wow"}>Units</p>
      <DropdownIcon />
    </div>
  );
};

const DropdownMenu = () => (
  <div className={"dropdown__menu"}>Dropdown Content</div>
);

export default Dropdown;
