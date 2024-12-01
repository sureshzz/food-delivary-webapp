import React from "react";
import Link from "next/link";

const RestaurantHeader = () => {
  const liCss: string = "hover:underline";
  return (
    <div className="w-full flex justify-between items-center border-b-2">
      <div className=" h-12 w-12 ml-4">
        <img
          src="/images/deliverytruck.svg"
          // height={50}
          // width={50}
          albg-pink-700t="logo"
        />
      </div>
      <ul className="flex justify-end gap-4 text-lg  text-slate-800 px-4">
        <li className={liCss}>
          <Link href={"#"}>Home</Link>
        </li>
        <li className={liCss}>
          <Link href={"#"}>login/signup</Link>
        </li>
        <li className={liCss}>
          <Link href={"#"}>Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantHeader;
