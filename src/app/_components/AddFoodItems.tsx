import React from 'react'
import { useState } from 'react';

const AddFoodItems = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [path, setPath] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const inputCss = "border-2 rounded-md bg-slate-100 hover:bg-slate-200";
  const handleAddFoodItem = () => {
    console.log(name, price, path, description);
  };


  return (
    <div>
      <h1>Add Food component</h1>

      <br></br>
      <div className="bg-slate-100 flex flex-col justify-start items-center">
        <h1 className="text-3xl p-4">
         Add Food Item
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
          {/* {error && !name && (
            <span className="text-red-600">Please enter valid name.</span>
          )} */}
          <label htmlFor="">Enter your price:</label>
          <input
            type="text"
            placeholder=""
            className={inputCss}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          {/* {error && !email && (
            <span className="text-red-600">Please enter valid email. </span>
          )} */}
          <label htmlFor="">Path:</label>
          <input
            type="text"
            placeholder=""
            className={inputCss}
            value={path}
            onChange={(e) => {
              setPath(e.target.value);
            }}
          />
          {/* {passwordError && (
            <span className="text-red-600">
              Password and Confirm password doesnot match
            </span>
          )}
          {error && !password && (
            <span className="text-red-600">Please enter valid password. </span>
          )} */}
          <label htmlFor="">Enter the description:</label>
          <input
            type="text"
            placeholder=""
            className={inputCss}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          {/* {passwordError && (
            <span className="text-red-600">
              Password and Confirm password doesnot match
            </span>
          )}
          {error && !cPassword && (
            <span className="text-red-600">
              Please enter valid Confirm password.{" "}
            </span>
          )} */}
         

          <button onClick={handleAddFoodItem}
            className="bg-blue-700 text-white p-1 rounded-md my-2 hover:bg-blue-500"
          >
           Add Food
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFoodItems