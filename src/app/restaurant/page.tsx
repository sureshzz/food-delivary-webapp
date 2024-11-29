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
      <div className="flex flex-col items-center border-2 rounded-md">
        <div>restaurant page</div>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}
        <button
          className="hover:cursor hover:underline p-1 my-2 "
          onClick={() => {
            setLogin(!login);
          }}
        >
          {login
            ? "Donot have an account?Sign Up"
            : "already have an account?Sign In"}
        </button>
      </div>
    </>
  );
}

export default Restaurant