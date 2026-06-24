import { SearchIcon } from "lucide-react";

export const Search = ({ searchText, setSearchText }) => {
  return (
    <div className="flex flex-row items-center border border-gray-500 rounded-md ">
      <input
        value={searchText}
        className="px-4 py-1 focus:outline-none"
        placeholder="Start your search here ..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="bg-gray-500 py-2 px-2">
        <SearchIcon size={20} />
      </button>
    </div>
  );
};
