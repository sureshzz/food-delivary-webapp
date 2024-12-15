import React from 'react'
import { useState } from 'react';

const AddFoodItems = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [path, setPath] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<Boolean>(false);

  const inputCss = "border-2 rounded-md bg-slate-100 hover:bg-slate-200";
  const handleAddFoodItem = async () => {
    console.log(name, price, path, description);
    if (!name || !price || !path || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
      let restaurant_id;
      let storedDdata = localStorage.getItem("restaurantUser");
      if (storedDdata) {
        const restaurantData = JSON.parse(storedDdata);
        restaurant_id = restaurantData._id;
      }

      let response = await fetch(
        "http://localhost:3000/api/restaurants/foods",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            price,
            img_path: path,
            description,
            restaurant_id,
          }),
        }
      );
      let result = await response.json();
      if (result.success) {
        alert("food is added successfully");
      }else{
        alert("food couldn't be added.")
      }
    }
      }


  return (
    <div>
      <h1>Add Food component</h1>

      <br></br>
      <div className="bg-slate-100 flex flex-col justify-start items-center">
        <h1 className="text-3xl p-4">Add Food Item</h1>
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
          {error && !price && (
            <span className="text-red-600">Please enter valid price. </span>
          )}
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
          {error && !path && (
            <span className="text-red-600">Please enter valid path. </span>
          )}
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


          {error && !description && (
            <span className="text-red-600">Please enter description. </span>
          )}

          <button
            onClick={handleAddFoodItem}
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