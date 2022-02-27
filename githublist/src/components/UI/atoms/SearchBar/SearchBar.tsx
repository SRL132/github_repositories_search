import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../../redux/filters/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
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
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          onChange={handleChange}
          name="search"
          placeholder="Find a repository..."
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-5 mr-4"
        ></button>
      </form>
    </div>
  );
}
