import React from "react";

interface IPeople {
  firstName: String;
}
interface Props {
  nameList: IPeople[];
}

export default function People({ nameList }: Props) {
  return (
    <div className="m-12">
      <h1 className="text-red-500 font-sans pb-2 text-xl">Users</h1>
      <div className="w-full flex justify-center overflow-hidden bg-white shadow-md pt-2 pb-2 pl-4 pr-4 rounded-md">
        <div className="flex flex-wrap justify-center w-3/4">
          {nameList.map((node, key) => (
            <h1
              key={key}
              className="flex-initial p-2 text-gray-400 hover:text-blue-500"
            >
              {node}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
