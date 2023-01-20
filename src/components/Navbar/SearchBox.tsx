import React from "react";
import { RiSearchLine } from "react-icons/ri";

type Props = {};

const SearchBox = (props: Props) => {
  return (
    <div className="relative flex items-center text-gray-600">
      <input
        className="glass text-white font-bold text-s h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search locations..."
      />
      <button type="submit" className="absolute h-full right-0 top-0 mr-4">
        <RiSearchLine className="text-primary h-4 w-4 fill-current" />
      </button>
    </div>
  );
};

export default SearchBox;
