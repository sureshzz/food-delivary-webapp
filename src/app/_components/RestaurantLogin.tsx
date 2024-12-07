import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosRestaurant } from "react-icons/io";

const RestaurantLogin: React.FC = () => {
  const inputCss = "border-2 rounded-md bg-slate-100 hover:bg-slate-200";
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const router = useRouter();

  const handleLogin = async ()=>{ 
    if (!email || !password) {
      setError(true);
      return false;
    }
      else{
        setError(false);
      }

      let response = await fetch ("http://localhost:3000/api/restaurants",{
        method:"POST",
        body:JSON.stringify({email,password,login:true})
      });
      // console.log("response",response)
      let result  = await response.json();
      //  console.log("result",result);
      //  console.log("success",result.success);
      
       if(result.success){
        // alert("login successfully")
        // console.log(result);
        let data  = result.result;
        // console.log(data);
        delete data.password;
        localStorage.setItem("restaurantUser",JSON.stringify(data))
        router.push("/restaurant/dashboard")
        // console.log(data);

       }



    }


  return (
    // <div className="grid place-items-center">

    <div className=" flex flex-col justify-start items-center ">
      <h1 className="text-3xl p-4">
        Login as Restaurant
        <IoIosRestaurant className="inline ml-1 hover:animate-spin " />
      </h1>
      {/* <h1 className="text-3xl p-4">
        Login as Restaurant
        <IoIosRestaurant className="inline ml-1 animate-spin duration-1000" />
      </h1> */}
      <div className="flex flex-col text-base gap-1 flex-1">
        <label htmlFor="">Enter your email:</label>
        <input
          type="text"
          placeholder=""
          className={inputCss}
          name="email"
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
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {error && !password && (
          <span className="text-red-600">Please enter valid password. </span>
        )}
        <button className="bg-blue-700 text-white p-1 rounded-md my-2 hover:bg-blue-500" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
    // </div>
  );
};

export default RestaurantLogin;
