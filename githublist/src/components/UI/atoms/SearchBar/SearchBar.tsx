import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../../redux/filters/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setSearch(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
    </form>
  );
}
