import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type SelectComponentProps = {
  id: string;
  label: string;
  age: number;
  list: Array<any>;
  customClass?: string;
};

export default function SelectComponent({
  id = "id-select",
  age = 0,
  label = "label",
  list = [],
  customClass = "",
}: SelectComponentProps) {
  return (
    <FormControl fullWidth className={customClass}>
      <InputLabel id={"label-" + id}>{label}</InputLabel>
      <Select labelId={"label-" + id} id={id} value={age} label="Age">
        {list.map((element, index) => (
          <MenuItem key={index} value={element.value}>{element.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
