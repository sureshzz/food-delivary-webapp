import React, { useState } from "react";
import { IoIosRestaurant } from "react-icons/io";
import { stringify } from "querystring";
import { json } from "stream/consumers";
import { useRouter } from "next/navigation";

const RestaurantSignUp: React.FC = () => {
  const inputCss = "border-2 rounded-md bg-slate-100 hover:bg-slate-200";
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cPassword, setCpassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [contact, setContact] = useState<number>();

  const router = useRouter();

  const [error, setError] = useState<Boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleSignUp = async () => {
    if (password !== cPassword) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }
    if (!name || !email || !password || !cPassword || !address || !contact) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    console.log(name, email, password, cPassword, address, contact);
    let result = await fetch("http://localhost:3000/api/restaurants", {
      method: "POST",
      body: JSON.stringify({ name, email, password, address, contact }),
    });

    if (!result.ok) {
      throw new Error("Failed to sign up. Please try again.");
    }
    let response = await result.json();

    if (response.success) {
      // alert("restaurant registered successfully");
      console.log("Data in return", response);
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      console.log(JSON.stringify(result));
      router.push("/restaurant/dashboard");
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
        {error && !name && (
          <span className="text-red-600">Please enter valid name.</span>
        )}
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
        {error && !email && (
          <span className="text-red-600">Please enter valid email. </span>
        )}
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
        {passwordError && (
          <span className="text-red-600">
            Password and Confirm password doesnot match
          </span>
        )}
        {error && !password && (
          <span className="text-red-600">Please enter valid password. </span>
        )}
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

        {passwordError && (
          <span className="text-red-600">
            Password and Confirm password doesnot match
          </span>
        )}
        {error && !cPassword && (
          <span className="text-red-600">
            Please enter valid Confirm password.{" "}
          </span>
        )}
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
        {error && !address && (
          <span className="text-red-600">Please enter valid address. </span>
        )}
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
        {error && !contact && (
          <span className="text-red-600">Please enter valid contact. </span>
        )}

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

export default RestaurantSignUp;
