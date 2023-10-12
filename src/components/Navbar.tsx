import { FC, useState } from 'react';

const Navbar: FC = () => {
  const getCurrentTheme = () =>
    document.documentElement.getAttribute('data-theme');

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const currentTheme = getCurrentTheme();

    if (!currentTheme) {
      const _isDarkMode = localStorage.getItem('isDarkMode') === 'true';

      document.documentElement.setAttribute(
        'data-theme',
        _isDarkMode ? 'myDarkTheme' : 'myLightTheme',
      );
    }

    return currentTheme === 'myDarkTheme';
  });

  const handleToggleTheme = () => {
    const currentTheme = getCurrentTheme();

    if (currentTheme === 'myLightTheme') {
      setIsDarkMode(true);
      localStorage.setItem('isDarkMode', 'true');
      document.documentElement.setAttribute('data-theme', 'myDarkTheme');
    } else {
      setIsDarkMode(false);
      localStorage.setItem('isDarkMode', 'false');
      document.documentElement.setAttribute('data-theme', 'myLightTheme');
    }
  };

  return (
    <header className="navbar max-h-[120px]">
      <div className="flex-1">
        <a href="/">
          <svg
            viewBox="0 0 315 80"
            fill="none"
            className="h-[80px] w-[150px] md:w-[315px]"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.6875 33.7188C26.6875 29.0521 27.875 25.6875 30.25 23.625C32.6875 21.5208 36.5938 20.4688 41.9688 20.4688H43.875V42.9375C43.875 52.625 41.1042 58.8333 35.5625 61.5625C33.625 62.5208 31.3021 63 28.5938 63H26.6875V33.7188ZM19.3125 63C14.0833 63 10.1875 61.1771 7.625 57.5312C5.25 54.1562 4.0625 49.2917 4.0625 42.9375V20.4688H5.96875C11.3438 20.4688 15.25 21.5208 17.6875 23.625C20.0625 25.6875 21.25 29.0521 21.25 33.7188V63H19.3125ZM74.5625 31.125H91.8125V63H89.8438C84.4271 63 80.5312 62.0521 78.1562 60.1562C75.7604 58.2396 74.5625 55.0729 74.5625 50.6562V31.125ZM52 47.4375C52 45.1458 52.3021 43.0208 52.9062 41.0625C53.5104 39.0833 54.4479 37.3542 55.7188 35.875C58.4688 32.7083 62.4062 31.125 67.5312 31.125H69.9375V63H68.3125C63.0625 63 59 61.5625 56.125 58.6875C53.375 55.9375 52 52.1875 52 47.4375ZM109.656 22.5625C102.76 22.5625 99.3125 20.4062 99.3125 16.0938C99.3125 13.8854 100.135 12.3021 101.781 11.3438C103.427 10.3646 105.938 9.875 109.312 9.875C112.688 9.875 115.177 10.3646 116.781 11.3438C118.385 12.3021 119.188 13.8958 119.188 16.125C119.188 18.3333 118.438 19.9583 116.938 21C115.458 22.0417 113.031 22.5625 109.656 22.5625ZM101.062 31.1562H117.875V63H101.062V31.1562ZM126.656 15.1875H143.469V62.9375H126.656V15.1875ZM148.656 31.125H151.062C156.188 31.125 160.104 32.7083 162.812 35.875C165.292 38.7708 166.531 42.5833 166.531 47.3125C166.531 52.125 165.167 55.9167 162.438 58.6875C159.604 61.5625 155.552 63 150.281 63H148.656V31.125ZM174.594 15.1562H191.406V63H174.594V15.1562ZM197.156 31.125H199.969C207.635 31.125 212.208 33.7292 213.688 38.9375C214.188 40.625 214.438 42.5729 214.438 44.7812V63H197.156V31.125ZM245.125 31.125H262.375V63H260.406C254.99 63 251.094 62.0521 248.719 60.1562C246.323 58.2396 245.125 55.0729 245.125 50.6562V31.125ZM222.562 47.4375C222.562 45.1458 222.865 43.0208 223.469 41.0625C224.073 39.0833 225.01 37.3542 226.281 35.875C229.031 32.7083 232.969 31.125 238.094 31.125H240.5V63H238.875C233.625 63 229.562 61.5625 226.688 58.6875C223.938 55.9375 222.562 52.1875 222.562 47.4375ZM293.125 44.375C293.125 39.7083 294.312 36.3333 296.688 34.25C299.125 32.1667 303.031 31.125 308.406 31.125H310.312V42.9375C310.312 52.625 307.542 58.8333 302 61.5625C300.062 62.5208 297.74 63 295.031 63H293.125V44.375ZM285.75 63C280.521 63 276.625 61.1771 274.062 57.5312C271.688 54.1562 270.5 49.2917 270.5 42.9375V31.125H272.406C277.781 31.125 281.688 32.1667 284.125 34.25C286.5 36.3333 287.688 39.7083 287.688 44.375V63H285.75Z"
              fill="url(#paint0_linear_1_16)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_16"
                x1="332"
                y1="40"
                x2="-24"
                y2="40"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#EF3AFF" />
                <stop offset="1" stopColor="#875FFA" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>

      <div className="flex flex-none gap-3 mb-2 items-center">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current">
              <path
                color="#875FFA"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className="flex-none">
          <button className="btn btn-square btn-ghost relative">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                defaultChecked={!isDarkMode}
                onChange={handleToggleTheme}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  fill="#FFC700"
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  fill="#FFC700"
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                />
              </svg>
            </label>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
