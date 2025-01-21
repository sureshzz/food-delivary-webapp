'use client';
import React, { useState } from "react";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import AddFoodItems from "@/app/_components/AddFoodItems";
import FoodItemList from "@/app/_components/FoodItemList";

const Dashboard = () => {
  const[addItem,setAddItem] = useState<boolean>(false)
  return (
    <div>
      <RestaurantHeader />
      <h1>Welcome to dashboard</h1>
      <button className = 'bg-slate-400' onClick={()=>{setAddItem(true)}}>Add food</button>
      <button className="bg-blue-200" onClick={()=>{setAddItem(false)}}>Dashboard</button>
      {
        addItem?<AddFoodItems/>: <FoodItemList />
      }
    </div>
  );
};

export default Dashboard;
