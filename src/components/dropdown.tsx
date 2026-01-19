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
  const temperatures = [
    { type: "Celsius (C)", id: "celsius", name: "temperature" },
    { type: "Fahrenheit (F)", id: "fahrenheit", name: "temperature" },
  ];

  const windSpeed = [
    { type: "km/h", id: "kilometers", name: "speed" },
    { type: "mph", id: "miles", name: "speed" },
  ];

  const precipitation = [
    { unit: "Millimeters (mm)", id: "millimeters", name: "precipitation" },
    { unit: "Inches (in)", id: "inches", name: "precipitation" },
  ];

  return (
    <div className={"dropdown__option-select"}>
      <p>Switch to Imperial</p>

      <div className="temperature">
        <p className={"dropdown__section-title"}>Temperature</p>

        {temperatures.map((item, index) => (
          <div className="form-control" key={index}>
            <label htmlFor={item.id}>{item.type}</label>
            <input type="radio" name={item.name} id={item.id} />
          </div>
        ))}
      </div>

      <div className="wind-speed">
        <p className={"dropdown__section-title"}>Wind Speed</p>
        {windSpeed.map((item, index) => (
          <div className="form-control" key={index}>
            <label htmlFor={item.id}>{item.type}</label>
            <input type="radio" name={item.name} id={item.id} />
          </div>
        ))}
      </div>

      <div className="precipitation">
        <p className={"dropdown__section-title"}>Precipitation</p>
        {precipitation.map((item, index) => (
          <div className="form-control" key={index}>
            <label htmlFor={item.id}>{item.unit}</label>
            <input type="radio" name={item.name} id={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
