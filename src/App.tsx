import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import People from "./components/People";
import Stats from "./components/Stats";
import Overview from "./components/Overview";

import { GetData } from "./utils/getData";

function App() {
  const [userData, setUserData] = useState([]);
  const [deviceData, setDeviceData] = useState([]);
  const [noDevices, setNoDevices] = useState([]);

  useEffect(() => {
    GetData("http://localhost:9090/people")
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    GetData("http://localhost:9090/items")
      .then((data) => {
        setDeviceData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    GetData("http://localhost:9090/people-wo-items")
      .then((data) => {
        setNoDevices(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-200 h-full">
      <Navbar />
      <div className="flex flex-wrap flex-col content-center">
        <div className="flex">
          <Overview
            deviceCount={deviceData.length}
            userCount={userData.length}
            countOfNoDevices={noDevices.length}
          />
        </div>
        <People nameList={userData.map((user) => user["first_name"])} />
        <Stats />
      </div>
    </div>
  );
}

export default App;
