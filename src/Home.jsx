import React from 'react';
import food from './assets/food.png'

function Home() {
  return (
    <div className="min-h-screen bg-lime-100 flex flex-col md:flex-row items-center justify-center p-6">
      
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-lime-800">Welcome to FoodCart 🍽️</h1>
        <h2 className="text-2xl text-lime-700 font-semibold">Best food when you are hungry 🍔</h2>
        <p className="text-gray-700 text-lg">
          Order your favorite meals from the best restaurants near you. Fast delivery, fresh food, and great taste!
        </p>
        <button className="mt-4 px-6 py-2 bg-lime-600 hover:bg-lime-700 text-white rounded-md font-semibold">
          Explore Now 🚀
        </button>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={food}
          className="rounded-2xl shadow-lg h-120 w-120"
        />
      </div>
    </div>
  );
}

export default Home;
