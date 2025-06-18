import React from 'react'
import Card from './Card'

function Products() {
  return (
    <div className="min-h-screen bg-lime-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Menu Card</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <Card 
        image="https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphJTIwcG5nfGVufDB8fDB8fHww"
        dishName="Cheese Brust Pizza"
        price="Rs. 200" 
        buttonText="Order Now"/>
        
        <Card 
        image="https://burgerrecipes.info/wp-content/uploads/2024/12/Tandoori-Chicken-Burger.png"
        dishName="Chicken Cheese Burger"
        price="Rs. 179"
        buttonText="Order Now"/>
        
        <Card 
        image="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F4180%2Ftrend20231102054259.jpg"
        dishName="Bombay Grilled Sandwich"
        price="Rs.149"
        buttonText="Order Now"/>
        
        <Card 
        image="https://t4.ftcdn.net/jpg/06/62/50/11/360_F_662501114_UghVvE3Lz8YguLkE9jX1Unk56D1OyEUO.jpg"
        dishName="Peri Peri Fries"
        price="Rs. 120"
        buttonText="Order Now"/>
        
        <Card 
        image="https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png"
        dishName="Spicy Penne Pasta"
        price="Rs. 249"
        buttonText="Order Now"/>
        
        <Card 
        image="https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.jpg?s=612x612&w=0&k=20&c=i1rRa1x7D1pu-INKabmC21BaU9MC8ZRQdcC7dBLdzUo="
        dishName="Chocolate Lava Cake"
        price="Rs. 280"
        buttonText="Order Now"/>
        
        <Card 
        image="https://img.freepik.com/free-photo/mango-juice-glass-dark-surface_1150-41957.jpg?semt=ais_hybrid&w=740"
        dishName="Mango Shake"
        price="Rs. 129"
        buttonText="Order Now"/>
        
        <Card 
        image="https://www.shutterstock.com/image-photo/kitkat-chocolate-shake-260nw-1363711460.jpg"
        dishName="Kitkat Shake"
        price="Rs. 199"
        buttonText="Order Now"/>
        
        <Card 
        image="https://marvel-b1-cdn.bc0a.com/f00000000291013/sunkist.com/wp-content/uploads/2022/08/Rainbow-Fruit-Parfait_Carousel_1000x750_F2.png"
        dishName="Fruits Custard"
        price="Rs. 289"
        buttonText="Order Now"/>
        
        <Card 
        image="https://rmbmisthanbhandar.in/wp-content/uploads/2024/08/Cold-Coffee-at-RMB-misthan-bhandar-01.png"
        dishName="Cafe Fuel"
        price="Rs. 210"
        buttonText="Order Now"/>
      </div>
    </div>
  );
}

export default Products