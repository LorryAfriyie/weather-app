import { DropdownIcon, UnitIcon } from "./svg.tsx";
import { useState } from "react";

interface DropdownOptionProps {
  open: boolean;
}

interface DropdownOptionDisplayProps {
  toggleDropdown: () => void;
}

const Dropdown = () => {
  // State boolean for dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to open/close the dropdown menu
  function toggleDropdown() {
    setIsOpen((current) => !current);
  }

  return (
    <div className={"dropdown"}>
      <DropdownOptionDisplay toggleDropdown={toggleDropdown} />
      <DropdownMenu open={isOpen} />
    </div>
  );
};

const DropdownOptionDisplay = ({
  toggleDropdown,
}: DropdownOptionDisplayProps) => {
  return (
    <div className={`dropdown__option`} onClick={toggleDropdown}>
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
