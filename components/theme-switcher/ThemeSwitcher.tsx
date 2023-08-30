import dynamic from "next/dynamic";
import useLocalStorage from "../../hooks/useLocalStorage";
import { MoonIcon, SunIcon } from "../icons";

function ThemeSwitcherComponent() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    setTheme("dark");
  }

  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    setTheme("light");
  }

  return (
    <div>
      {theme === "light" ? (
        <button
          id="theme-switcher"
          className="theme-icon"
          data-theme="dark"
          onClick={setDarkTheme}
        >
          <MoonIcon />
        </button>
      ) : (
        <button
          id="theme-switcher"
          className="theme-icon"
          data-theme="light"
          onClick={setLightTheme}
        >
          <SunIcon />
        </button>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(ThemeSwitcherComponent), {
  ssr: false,
});
