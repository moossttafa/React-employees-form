import React from "react";
import DatePicker from "./control/DatePicker";
import Input from "./control/Input";
import Radio from "./control/Radio";
import Select from "./control/Select";

const FormControl = ({ control, ...reset }) => {
  switch (control) {
    case "input":
      return <Input {...reset} />;
    case "radio":
      return <Radio {...reset} />;
    case "select":
      return <Select {...reset} />;
    case "date":
      return <DatePicker {...reset} />;
    default:
      return null;
  }
};

export default FormControl;
