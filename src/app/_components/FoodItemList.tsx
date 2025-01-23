import React, { useEffect } from 'react'

const FoodItemList = () => {
  useEffect(()=>{
     loadFoodItems();

  })

  const loadFoodItems = async ()=>{
    let response = await fetch(
      "http://localhost:3000/api/restaurants/foods/6754a98331d39c35ace0deed"
    );
    response = await response.json();
    console.log(response);

  }

  return (
    <>
      <div>FoodItemList</div>
      <table>
        <thead>
          <tr>
            <td>S.N</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Burger</td>
            <td>22</td>
            <td>large one</td>
            <td><button>edit</button><button>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default FoodItemList 