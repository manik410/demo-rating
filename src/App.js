import React from "react";
import "./App.css";
import Topic from "./Topics";
const App = () => {
  const data = [
    {
      id: "dimesion_study",
      subHeading: "Coding Class #155",
      heading: "Know the Dimension",
      date_time: "4:30 PM, 13 Mar 2023",
      name: "Reema Milan",
      profile: "HTML & CSS Expert",
    },
    {
      id: "strongest_tower",
      subHeading: "Coding Class #155",
      heading: "Strongest Tower",
      date_time: "4:30 PM, 13 Mar 2023",
      name: "Reema Milan",
      profile: "HTML & CSS Expert",
    },
    {
      id: "programmer_think",
      subHeading: "Coding Class #155",
      heading: "Programming and Think",
      date_time: "4:30 PM, 13 Mar 2023",
      name: "Reema Milan",
      profile: "HTML & CSS Expert",
    },
  ];
  return (
    <div className="mainBox">
      {data?.map((topic, index) => {
        return <Topic data={topic} key={index} />;
      })}
    </div>
  );
};
export default App;
