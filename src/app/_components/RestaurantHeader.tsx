"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdLocalGasStation } from "react-icons/md";

const RestaurantHeader = () => {
  const liCss: string = "hover:underline";
  const router = useRouter();
  const pathName = usePathname();

  const [details, setDetails] = useState<string | null>("");

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName == "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setDetails(data ? JSON.parse(data) : null);
    }
  },[]);

  const handleLogout = () => {
    localStorage.removeItem("restaurantUser");
      router.push("/restaurant");
  };

  return (
    <div className="w-full flex justify-between items-center border-b-2">
      <div className=" h-12 w-12 ml-4">
        <img src="/images/deliverytruck.svg" albg-pink-700t="logo" />
      </div>
      <ul className="flex justify-end gap-4 text-lg  text-slate-800 px-4">
        <li className={liCss}>
          <Link href={"#"}>Home</Link>
        </li>
        {details && details ? (
          <>
            <li className={liCss}>
              <Link href={"#"}>Profile</Link>
            </li>
            <li className={liCss}>
              <Link href={"#"} onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li className={liCss}>
            <Link href={"#"}>login/signup</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantHeader;
