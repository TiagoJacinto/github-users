import SunIcon from "../../assets/icon-sun.svg";
import MoonIcon from "../../assets/icon-moon.svg";
import { useColorTheme } from "../../hooks/useColorTheme";

export const ColorSchemeToggle = () => {
  const { colorTheme, setTheme } = useColorTheme();
  const isDarkMode = colorTheme === "dark" ? true : false;

  return (
    <button
      className="flex items-center gap-4 text-custom-navi-blue-600 hover:opacity-70 dark:text-white"
      onClick={() =>
        setTheme((prev: "dark" | "light") =>
          prev === "dark" ? "light" : "dark"
        )
      }
    >
      <span className="text-custom-h4 font-bold uppercase">
        {isDarkMode ? "Dark" : "Light"}
      </span>

      <img src={isDarkMode ? MoonIcon : SunIcon} alt="color scheme icon" />
    </button>
  );
};
