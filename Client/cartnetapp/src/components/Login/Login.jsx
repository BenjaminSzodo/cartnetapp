import React, { useState } from "react";
import logo from "../../images/SANJOSE.png"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center h-screen  w-screen bg-neutral-900">
      <div className=" w-64 h-96 flex  flex-col items-center justify-center bg-slate-800 shadow-xl rounded-lg ">
        <img src={logo} alt="logo" className="w-40 h-auto mb-4 mt-4" />

        <form onSubmit={handleSubmit} className="form">
          <div className=" flex items-center text-sm text-center bg-transparent w-full box-border  px-2 py-2 border-b-4 border-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-slate-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <input
              className="text-sm text-center bg-transparent w-full box-border duration-300 px-2 py-2 border-b-4 border-transparent focus:outline-none hover:border-blue-500 focus:border-blue-500 ml-4 placeholder:italic placeholder-text-slate-200"
              type="text"
              placeholder="Nombre"
            />
          </div>

          <div className="relative flex items-center text-sm text-center bg-transparent w-full box-border duration-300 px-2 py-2 border-b-4 border-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-slate-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <input
              className="text-sm text-center bg-transparent w-full box-border duration-300 px-2 py-2 border-b-4 border-transparent focus:outline-none hover:border-blue-500 focus:border-blue-500 ml-4 placeholder:italic placeholder-text-slate-200"
              type="text"
              placeholder="DNI"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-12 h-12 bg-blue-500 hover:bg-red-900 text-slate-200 border-none font-bold p-2 rounded-full flex items-center justify-center mt-2 mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;
