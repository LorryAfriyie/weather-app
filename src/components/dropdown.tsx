import { DropdownIcon, UnitIcon } from "./svg.tsx";
import { useEffect, useState } from "react";

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
  const [options, setOptions] = useState({
    temperature: "",
    speed: "",
    precipitation: "",
  });

  const handleWindSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOptions((options) => ({ ...options, [name]: value }));
  };

  const handleTemperture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOptions((options) => ({ ...options, [name]: value }));
  };

  const handlePrecipitation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOptions((options) => ({ ...options, [name]: value }));
  };

  const temperatures = [
    {
      type: "Celsius (C)",
      id: "celsius",
      name: "temperature",
      value: "celsius",
      checked: true,
    },
    {
      type: "Fahrenheit (F)",
      id: "fahrenheit",
      value: "fahrenheit",
      name: "temperature",
    },
  ];

  const windSpeed = [
    {
      type: "km/h",
      id: "kilometers",
      value: "km/h",
      name: "speed",
      checked: true,
    },
    { type: "mph", id: "miles", value: "mph", name: "speed" },
  ];

  const precipitation = [
    {
      unit: "Millimeters (mm)",
      id: "millimeters",
      value: "mm",
      name: "precipitation",
      checked: true,
    },
    { unit: "Inches (in)", id: "inches", value: "in", name: "precipitation" },
  ];

  useEffect(() => {
    console.log(options);
  }, [options]);

  return (
    <div className={"dropdown__option-select"}>
      <p>Switch to Imperial</p>

      <div className="temperature">
        <p className={"dropdown__section-title"}>Temperature</p>

        {temperatures.map((item, index) => (
          <div className="form-control" key={index}>
            <label htmlFor={item.id}>
              {item.type}
              <input
                type="radio"
                name={item.name}
                id={item.id}
                value={item.value}
                onChange={handleTemperture}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
      </div>

      <div className="wind-speed">
        <p className={"dropdown__section-title"}>Wind Speed</p>
        {windSpeed.map((item, index) => (
          <div className="form-control" key={index}>
            <label htmlFor={item.id}>
              {item.type}
              <input
                type="radio"
                name={item.name}
                id={item.id}
                value={item.value}
                onChange={handleWindSpeed}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
      </div>

      <div className="precipitation">
        <p className={"dropdown__section-title"}>Precipitation</p>
        {precipitation.map((item, index) => (
          <div className="form-control" key={index}>
            <label htmlFor={item.id}>
              {item.unit}
              <input
                type="radio"
                name={item.name}
                id={item.id}
                value={item.value}
                onChange={handlePrecipitation}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
