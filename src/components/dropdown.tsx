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
  <div className={`dropdown__menu ${open && "open"}`}>
    <DropdownOptions />
  </div>
);

const DropdownOptions = () => {
  const temperatures = [{ type: "Celsius (C)" }, { type: "Fahrenheit (F)" }];

  const windSpeed = [{ type: "km/h" }, { type: "mph" }];

  const precipitation = [{ unit: "Millimeters (mm)" }, { unit: "Inches (in)" }];

  return (
    <div className={"dropdown__option-select"}>
      <p>Switch to Imperial</p>

      <div className="temperature">
        <p>Temperature</p>
        {temperatures.map((item, index) => (
          <p key={index}>{item.type}</p>
        ))}
      </div>

      <div className="wind-speed">
        <p>Wind Speed</p>
        {windSpeed.map((item, index) => (
          <p key={index}>{item.type}</p>
        ))}
      </div>

      <div className="precipitation">
        <p>Precipitation</p>
        {precipitation.map((item, index) => (
          <p key={index}>{item.unit}</p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
