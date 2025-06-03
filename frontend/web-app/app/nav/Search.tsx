"use client";
import { FaSearch } from "react-icons/fa";
import { useParamsStore } from "../hooks/useParamsStore";
import { ChangeEvent, useEffect, useState } from "react";

export default function Search() {
  const setParams = useParamsStore((state) => state.setParams);
  const [value, setValue] = useState("");
  const searchTerm = useParamsStore((state) => state.searchTerm);

  useEffect(() => {
    if (searchTerm === "") {
      setValue("");
    }
  }, [searchTerm]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSearch() {
    setParams({ searchTerm: value });
  }

  return (
    <div className="flex w-[50%] items-center border-2 boarder-gray-300 rounded-full py-2 shadow-md">
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        type="text"
        placeholder="Search for cards by make, model or color"
        className="
        flex-grow
        pl-5
        bg-transparent
        focus:outline-none
        border-transparent
        focus:border-transparent
        focus:ring-0
        text-sm
        text-gray-600
        "
      />
      <button onClick={handleSearch}>
        <FaSearch
          size={34}
          className="bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2"
        />
      </button>
    </div>
  );
}
