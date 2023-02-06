import SearchIcon from "../../assets/icon-search.svg";

interface Props {}

export const SearchBar = ({}: Props) => {
  return (
    <form
      className="flex w-[600px] items-center justify-between gap-6 rounded-lg py-2 pl-6 pr-2 shadow-lg dark:bg-custom-navi-blue-900"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex flex-1 items-center gap-6">
        <img className="h-6 w-6" src={SearchIcon} alt="search icon" />
        <input
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-custom-navi-blue-600 dark:text-white dark:placeholder:text-white"
          placeholder="Search GitHub username..."
        />
      </div>
      <div>
        <span className="mr-6 font-bold text-red-600">No results</span>
        <button className="rounded-lg bg-custom-blue py-2.5 px-5 font-bold text-white hover:opacity-80 ">
          Search
        </button>
      </div>
    </form>
  );
};
