import { DropdownIcon, UnitIcon } from "./svg.tsx";
import { useState } from "react";

interface DropdownOptionProps {
  open: boolean;
}

const Dropdown = () => {
  // State boolean for dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to open/close the dropdown menu
  function toggleDropdown() {
    setIsOpen((current) => !current);
  }

  return (
    <div className={"dropdown"} onClick={toggleDropdown}>
      <DropdownOptionDisplay />
      <DropdownMenu open={isOpen} />
    </div>
  );
};

const DropdownOptionDisplay = () => {
  return (
    <div className={`dropdown__option `}>
      <UnitIcon />
      <p>Units</p>
      <DropdownIcon />
    </div>
  );
};

const DropdownMenu = ({ open }: DropdownOptionProps) => (
  <div className={`dropdown__menu ${open && "open"}`}>Dropdown Content</div>
);

export default Dropdown;
