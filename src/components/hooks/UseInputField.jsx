import { useState } from "react";

const UseInputfield = (defaultValue) => {
  const [field, setField] = useState(defaultValue);
  const handleFieldOnChange = (e) => {
    setField(e.target.value);
  };
  return [field, handleFieldOnChange];
};
export default UseInputfield;
