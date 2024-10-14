import React, { useState } from "react";

import { useAppDispatch } from "../../../../redux/hooks";
import { setSearch } from "../../../../redux/filters/actions";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearch(value));
  };

  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-96"
          type="text"
          onChange={handleChange}
          name="search"
          placeholder="Input repo name and press enter"
        />
      </form>
    </div>
  );
}
