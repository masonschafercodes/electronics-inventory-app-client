import React from "react";

interface Props {
  userCount: Number;
  deviceCount: Number;
  countOfNoDevices: Number;
}

export default function Overview({
  userCount,
  deviceCount,
  countOfNoDevices,
}: Props) {
  return (
    <div>
      <div className="flex flex-col mt-12 ml-12">
        <h1 className="text-red-500 font-sans pb-2 text-xl">Overview</h1>
        <div className="flex flex-row items-center justify-center">
          <div className="w-full bg-white shadow-md pt-2 pb-2 pl-4 pr-4 m-2 rounded-md">
            <div className="flex flex-row justify-center items-center overflow-hidden">
              <h1 className="text-3xl text-blue-500  hover:text-red-500">
                {userCount}
              </h1>
              <h1 className="p-2 text-gray-400">User(s)</h1>
            </div>
          </div>
          <div className="w-full bg-white shadow-md pt-2 pb-2 pl-4 pr-4 m-2 rounded-md">
            <div className="flex flex-row justify-center items-center overflow-hidden">
              <h1 className="text-3xl text-blue-500 hover:text-red-500">
                {deviceCount}
              </h1>
              <h1 className="p-2 text-gray-400">Device(s)</h1>
            </div>
          </div>
          <div className="w-full bg-white shadow-md pt-2 pb-2 pl-4 m-2 rounded-md">
            <div className="flex flex-row pr-7 justify-center items-center overflow-hidden">
              <h1 className="text-3xl text-blue-500 hover:text-red-500">
                {countOfNoDevices}
              </h1>
              <h1 className="flex flex-row p-2 text-gray-400 justify-self-center">
                No <span className="pl-1"> Device(s)</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
