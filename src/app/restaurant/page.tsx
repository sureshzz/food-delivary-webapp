"use client";
import React from 'react'
import RestaurantLogin from '../_components/RestaurantLogin';
import RestaurantSignUp from '../_components/RestaurantSignUp';
import { useState } from 'react';
import RestaurantHeader from '../_components/RestaurantHeader';
import RestaurantFooter from '../_components/RestaurantFooter';


const Restaurant:React.FC = () => {
  const [login,setLogin] = useState<boolean>(true);
  return (
    <>
      <div className="flex  flex-col items-center min-h-screen">
        <RestaurantHeader />
        {/* <div>restaurant page</div> */}
        <div className=" flex flex-col items-center border-2 bg-slate-100 rounded-lg mt-8">
          {login ? <RestaurantLogin /> : <RestaurantSignUp />}
          <button
            className="text-slate-500 border-t-2 mt-2 hover:cursor hover:underline hover:text-slate-700 py-4"
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login
              ? "Donot have an account?Sign Up"
              : "Already have an account?Sign In"}
          </button>
        </div>
        <RestaurantFooter />
      </div>
    </>
  );
}

export default Restaurant