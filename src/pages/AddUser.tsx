import React, { useState } from "react";
import axios from "axios";

interface IPost {
  first_name?: String;
  last_name?: String;
  email_address?: String;
  number_of_devices?: Number;
}

export default function AddUser() {
  const [post, setPost] = useState<IPost | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (post !== undefined) {
      axios
        .post("http://localhost:9090/person", post)
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
        <h1 className="text-3xl text-blue-500">Add User</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name" className="block pt-1">
            First Name:
          </label>
          <input
            type="text"
            name="first_name"
            onChange={(event) => {
              setPost({ ...post, first_name: event.target.value });
            }}
            className="bg-gray-100 rounded-md p-1 mt-1 outline-none"
            placeholder="First Name"
            required
          />
          <label htmlFor="last_name" className="block pt-1">
            Last Name:
          </label>
          <input
            type="text"
            name="last_name"
            onChange={(event) => {
              setPost({ ...post, last_name: event.target.value });
            }}
            className="bg-gray-100 rounded-md p-1 mt-1 outline-none"
            placeholder="Last Name"
            required
          />
          <label htmlFor="email" className="block pt-1">
            Email:
          </label>
          <input
            type="email"
            name="email"
            onChange={(event) => {
              setPost({ ...post, email_address: event.target.value });
            }}
            className="bg-gray-100 rounded-md p-1 mt-1 outline-none"
            placeholder="Email"
            required
          />
          <label htmlFor="number_of_devices" className="block pt-1">
            Number of Devices:
          </label>
          <input
            type="text"
            name="number_of_devices"
            onChange={(event) => {
              setPost({
                ...post,
                number_of_devices: parseInt(event.target.value),
              });
            }}
            className="bg-gray-100 rounded-md p-1 mt-1 outline-none"
            placeholder="Number of Devices"
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
