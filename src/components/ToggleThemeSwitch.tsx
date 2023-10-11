import { FC } from 'react';

const ToggleThemeSwitch: FC = () => {
  return (
    <input
      type="checkbox"
      className="toggle"
      onChange={() => {
        const currentTheme =
          document.documentElement.getAttribute('data-theme');

        if (currentTheme === 'myLightTheme') {
          document.documentElement.setAttribute('data-theme', 'myDarkTheme');
        } else {
          document.documentElement.setAttribute('data-theme', 'myLightTheme');
        }
      }}
    />
  );
};

export default ToggleThemeSwitch;
