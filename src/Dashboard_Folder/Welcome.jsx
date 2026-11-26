import React from 'react';

const Welcome = ({theme, toggletheme}) => {
  return (
    <div className=" w-329 ml-5 p-5 flex justify-between">
      <div>
        <h1 className="text-2xl">Welcome to Studyflow</h1>
        <p>Track your study habits and stay productive</p>
      </div>
      <div 
      onClick={toggletheme}
      className="shadow-lg border border-black/25 w-9  rounded mr-6 p-2 m-2 ">
        <i className={theme === "light" ? "ri-moon-line " :  "ri-sun-line "}></i>
      </div>
    </div>
  );
}

export default Welcome;
