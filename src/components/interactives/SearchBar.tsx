import { useState } from "react";
import SearchIcon from "../../assets/icon-search.svg";

interface Props {
  changeUsername: (username: string) => void;
  isError: boolean;
}

export const SearchBar = ({ changeUsername, isError }: Props) => {
  const [username, setUsername] = useState("");
  return (
    <form
      className="flex w-full items-center justify-between gap-2 rounded-xl bg-white py-2 pl-2 pr-2 shadow-lg dark:bg-custom-navi-blue-900 sm:pl-6"
      onSubmit={(e) => {
        e.preventDefault();
        changeUsername(username);
      }}
    >
      <div className="flex flex-1 items-center gap-3 sm:gap-6">
        <img
          className="h-5 w-5 sm:h-6 sm:w-6"
          src={SearchIcon}
          alt="search icon"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-custom-navi-blue-600 dark:text-white dark:placeholder:text-white sm:text-lg"
          placeholder="Search GitHub username..."
        />
      </div>
      <div>
        {isError && (
          <span className=" font-bold text-red-600 sm:mr-6">No results</span>
        )}
        <button className="rounded-lg bg-custom-blue py-2.5 px-5 font-bold text-white hover:opacity-80 ">
          Search
        </button>
      </div>
    </form>
  );
};
