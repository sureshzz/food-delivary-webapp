"use client";
import React from 'react'
import RestaurantLogin from '../_components/RestaurantLogin';
import RestaurantSignUp from '../_components/RestaurantSignUp';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Restaurant:React.FC = () => {
  const [login,setLogin] = useState<boolean>(true);
  return (
    <>
      <div className="flex  flex-col items-center">
        {/* <div>restaurant page</div> */}
        <div className=" flex flex-col items-center border-2 bg-slate-100 rounded-md ">
          {login ? <RestaurantLogin /> : <RestaurantSignUp />}
          <button
            className="hover:cursor hover:underline p-1 my-2 "
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login
              ? "Donot have an account?Sign Up"
              : "Already have an account?Sign In"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Restaurant