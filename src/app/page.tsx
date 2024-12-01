import Image from "next/image";
import Restaurant from "./restaurant/page";
import RestaurantHeader from "./_components/RestaurantHeader";

export default function Home() {
  return (
    <>
      {/* <h1>Food Delivery App</h1> */}
      <Restaurant />
    </>
  );
}
