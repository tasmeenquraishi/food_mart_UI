import React from 'react'

export const Card=({image, dishName, price, buttonText}) => {
  return (
    <div className='bg-white rounded-xl shadow-md p-4 w-64 hover:bg-lime-300'>

      <div>
      <img src={image} className='h-40 w-60'/>
      </div>
      <hr className="borde"></hr>
      <h3 className='text-lg font-semibold'>{dishName}</h3>
      <p className="text-sm text-gray-800 font-normal">{price}</p>

      <button className='mt-2 px-5 py-1 bg-lime-600 hover:bg-lime-700 text-white rounded-md font-semibold'>{buttonText}</button>

    </div>
  )
}

export default Card
