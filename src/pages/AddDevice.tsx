import React, { useState } from "react";
import axios from "axios";

interface IPost {
  name_of_item?: String;
  description?: String;
  person_id?: Number;
}

export default function AddUser() {
  const [post, setPost] = useState<IPost | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (post !== undefined) {
      axios
        .post("http://localhost:9090/item", post)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          document.location.reload();
        });
    }
  };
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-3xl text-blue-500">Add Device</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name_of_item" className="block pt-1">
            Name of Item:
          </label>
          <input
            type="text"
            name="name_of_item"
            onChange={(event) => {
              setPost({ ...post, name_of_item: event.target.value });
            }}
            className="bg-gray-100 rounded-md p-1 mt-1 outline-none"
            placeholder="Name of Item"
            required
          />
          <label htmlFor="description" className="block pt-1">
            Description:
          </label>
          <input
            type="text"
            name="description"
            onChange={(event) => {
              setPost({ ...post, description: event.target.value });
            }}
            className="bg-gray-100 rounded-md p-1 mt-1 outline-none"
            placeholder="Description"
            required
          />
          <label htmlFor="email" className="block pt-1">
            ID of Person:
          </label>
          <input
            type="text"
            name="person_id"
            onChange={(event) => {
              setPost({ ...post, person_id: parseInt(event.target.value) });
            }}
            className="bg-gray-100 rounded-md p-1 mt-1 outline-none"
            placeholder="ID of Person"
            required
          />
          <button
            type="submit"
            className="block mt-4 p-2 rounded-lg w-full text-white bg-blue-500 hover:bg-blue-300"
          >
            Submit
          </button>
        </form>
        <div className="pt-2 text-center flex flex-row items-center">
          <a
            href="/"
            className="text-center text-md p-1 text-red-500 hover:underline"
          >
            To Dashboard
          </a>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            className="fill-current text-red-500"
          >
            <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
