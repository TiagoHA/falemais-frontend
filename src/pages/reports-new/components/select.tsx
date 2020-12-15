import { useState } from "react";

interface IProps {
  onChange: Function;
  label: string;
  data: [
    {
      item: string;
      id: string;
      description: string;
    }
  ];
}

export function Select(props: IProps) {
  const [value, setValue] = useState<string>("0");

  function onChanged(e: React.ChangeEvent<HTMLSelectElement>) {
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
