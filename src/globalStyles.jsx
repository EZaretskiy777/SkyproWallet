import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  color: #000000;
  background-color: #F4F5F6;
}
  
.react-calendar {
    border: none;
    font-family: 'Inter', sans-serif;
    width: 100%;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .react-calendar__navigation button {
    background: none;
    font-weight: bold;
    font-size: 18px;
    padding: 8px;
    color: #333;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: capitalize;
    font-size: 14px;
    color: #888;
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    padding: 0 10px;
  }

  .react-calendar__tile {
    max-width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    background: none;
    transition: background-color 0.3s, color 0.3s;
  }

  .react-calendar__tile:enabled:hover {
    background: #e0f7e9;
    color: black;
  }

  .react-calendar__tile--now {
    font-weight: bold;
    color: #007bff;
  }

  .react-calendar__tile--range {
    background: #e0f7e9;
    color: black;
    border-radius: 0;
  }

  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd {
    background: #90ee90;
    color: white;
    border-radius: 50%;
  }
  `;
