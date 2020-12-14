import { useState } from "react";

// interface IProps {
//   description: string;
//   onchange: Function;
// }

export function Select(props) {
  const [value, setValue] = useState("0");

  function onChanged(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    console.log("dbg ~ selectChanged ~ e", e.target.value);
    setValue(e.target.value);
    props.onChange(e.target.value);
  }

  if (!props?.data) {
    return null;
  }

  return (
    <>
      <label>{props.label}</label>
      <select
        className="browser-default c-select"
        value={value}
        onChange={(e) => onChanged(e)}
      >
        <option value="0">{props.label}</option>
        {props?.data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.description}
          </option>
        ))}
      </select>
    </>
  );
}
