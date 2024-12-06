import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosRestaurant } from "react-icons/io";
import { stringify } from "querystring";
import { json } from "stream/consumers";

const restaurantLogin: React.FC = () => {
  const inputCss = "border-2 rounded-md bg-slate-100 hover:bg-slate-200";
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cPassword, setCpassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contact, setContact] = useState<number>();

  const handleSignUp = async () => {
    console.log(name, email, password, cPassword, address, contact);
    let result = await fetch("http://localhost:3001/api/restaurants", {
      method: "POST",
      body: JSON.stringify({ name, email, password, address, contact }),
    });
    let data = await result.json();
    console.log("result", result);

    if (data.success) {
      alert("restaurant registered successfully");
    }
  };

  return (
    <div className="bg-slate-100 flex flex-col justify-start items-center">
      <h1 className="text-3xl p-4">
        Login as Restaurant
        <IoIosRestaurant className="inline ml-1 hover:animate-spin " />
      </h1>
      <div className="flex flex-col text-base gap-1">
        <label htmlFor="">Enter Name:</label>
        <input
          type="text"
          placeholder=""
          className={inputCss}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="">Enter your email:</label>
        <input
          type="text"
          placeholder=""
          className={inputCss}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          placeholder=""
          className={inputCss}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="">Confirm Password:</label>
        <input
          type="password"
          placeholder=""
          className={inputCss}
          value={cPassword}
          onChange={(e) => {
            setCpassword(e.target.value);
          }}
        />
        <label htmlFor="">Address:</label>
        <input
          type="text"
          placeholder=""
          className={inputCss}
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <label htmlFor="">Contact num:</label>
        <input
          type="number"
          placeholder=""
          className={inputCss}
          value={contact}
          onChange={(e) => {
            setContact(Number(e.target.value));
          }}
        />

        <button
          onClick={handleSignUp}
          className="bg-blue-700 text-white p-1 rounded-md my-2 hover:bg-blue-500"
        >
          Sign Up
        </button>
      </div>
    </div>
    // </div>
  );
};

export default restaurantLogin;
