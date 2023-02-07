import axios from "axios";
import { ReactNode, useState } from "react";
import { ColorThemeToggle } from "./components/interactives/ColorThemeToggle";
import { SearchBar } from "./components/interactives/SearchBar";
import { ApiResponse } from "./types/ApiResponse";
import LinkIcon from "./assets/icon-website.svg";
import LocationIcon from "./assets/icon-location.svg";
import CompanyIcon from "./assets/icon-company.svg";
import TwitterIcon from "./assets/icon-twitter.svg";
import { useQuery } from "./hooks/useQuery";

export const App = () => {
  const [username, setUsername] = useState("tiagojacintodev");
  const changeUsername = (username: string) => setUsername(username);

  const {
    data: user,
    isError,
    isLoading,
  } = useQuery<ApiResponse>(async () => {
    return (await axios.get(`https://api.github.com/users/${username}`)).data;
  }, username);

  console.log(user);

  if (!user) return null;

  return (
    <div className="mx-auto my-6 w-11/12 sm:my-32 lg:w-[800px]">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-custom-h1 font-bold dark:text-white">devfinder</h1>
        <ColorThemeToggle />
      </div>
      <SearchBar changeUsername={changeUsername} isError={isError} />
      <div className="relative mt-6 rounded-xl bg-white p-6 shadow-lg dark:bg-custom-navi-blue-900 sm:p-12 lg:pl-48">
        <div className="flex items-center gap-3.5 sm:gap-10">
          <img
            className="h-20 w-20 rounded-full sm:h-28 sm:w-28 lg:absolute lg:top-12 lg:left-12"
            src={user.avatar_url}
            alt="user avatar"
          />
          <div className="flex flex-1 justify-between max-lg:flex-col">
            <div>
              {user.name ? (
                <h1 className="text-custom-h1 font-bold dark:text-white">
                  {user.name}
                </h1>
              ) : null}
              <h3 className="text-custom-h3 text-custom-blue">@{user.login}</h3>
            </div>
            <p className="text-custom-body text-custom-gray-300 dark:text-white lg:mt-1.5">
              Joined{" "}
              {new Date(user!.created_at).toLocaleDateString(undefined, {
                dateStyle: "medium",
              })}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-between rounded-lg bg-custom-gray-100 py-3.5 px-7 dark:bg-custom-gray-900">
          <div>
            <p className="text-custom-h4 text-custom-navi-blue-600 dark:text-white">
              Repos
            </p>
            <p className="text-custom-h2 font-bold dark:text-white">
              {user.public_repos}
            </p>
          </div>
          <div>
            <p className="text-custom-h4 text-custom-navi-blue-600 dark:text-white">
              Followers
            </p>
            <p className="text-custom-h2 font-bold dark:text-white">
              {user.followers}
            </p>
          </div>
          <div>
            <p className="text-custom-h4 text-custom-navi-blue-600 dark:text-white">
              Following
            </p>
            <p className="text-custom-h2 font-bold dark:text-white">
              {user.following}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-y-3.5 max-sm:flex max-sm:flex-col">
          <Data
            altText="location"
            data={user.location}
            image={LocationIcon}
            as="span"
          />
          <Data
            altText="link"
            data={user.html_url.slice(8)}
            image={LinkIcon}
            as="a"
            href={user.html_url}
          />
          <Data
            altText="twitter"
            data={user.twitter_username}
            image={TwitterIcon}
            as="span"
          />
          <Data
            altText="company"
            data={user.company}
            image={CompanyIcon}
            as="span"
          />
        </div>
      </div>
    </div>
  );
};

interface Props {
  data: string | null;
  image: string;
  altText: string;
  as?: keyof HTMLElementTagNameMap;
  [rest: string]: any;
}

function Data({ data, image, altText, as: Component = "div", ...rest }: Props) {
  return (
    <div className={`${data ? "" : "opacity-50"} flex items-center gap-4`}>
      <img
        className={`${data ? "dark:brightness-[999]" : ""}`}
        src={image}
        alt={altText}
      />
      <Component
        className="text-custom-navi-blue-600 dark:text-white"
        {...rest}
      >
        {data ?? "Not Available"}
      </Component>
    </div>
  );
}
