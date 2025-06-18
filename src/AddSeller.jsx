import React from 'react';

function AddSeller() {
  return (
    <div className="min-h-screen bg-lime-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">📦Add Seller</h2>

        <form className="space-y-4">
          <div>
            <label className=" text-sm font-medium text-black">Seller Name</label>
            <input type="text" placeholder="Enter seller name" className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md" required/>
          </div>

          <div>
            <label className=" text-sm font-medium text-black">Email</label>
            <input type="email" placeholder="Enter email address" className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md" required/>
          </div>

          <div>
            <label className=" text-sm font-medium text-black">Shop Name</label>
            <input type="tel" placeholder="Enter the name of Shop" className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md" required/>
          </div>

            <div>
            <label className=" text-sm font-medium text-black">Phone Number</label>
            <input type="tel" placeholder="Enter phone number" className="mt-1 w-full px-4 py-2 border border-gray-400 rounded-md" required/>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full bg-lime-700 text-white hover:text-black py-2 px-4 rounded-md hover:bg-lime-200 font-bold">
              ✅Add Seller
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSeller;
