import { useState, useEffect } from "react";
export const Debounce = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    console.log("Searching for:", searchText);
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);
  return (
    <div className="mt-5">
      <input
        className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};
