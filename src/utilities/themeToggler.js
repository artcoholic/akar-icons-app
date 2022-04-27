import { useEffect, useState } from 'react';

const myArray = [
  "light",
  "dark",
  "gray"
];
let myIndex = 1;

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");
  const [mountedComponent, setMountedComponent] = useState(false);


  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode)
  };

  const toggler = () => {
    setMode(myArray[myIndex++ % myArray.length]);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);

  return [theme, toggler, mountedComponent]
};

export default ThemeToggler;