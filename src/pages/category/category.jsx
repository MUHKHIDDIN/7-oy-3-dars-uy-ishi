import React from "react";

export const Category = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Categories</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://thumbs.dreamstime.com/b/home-appliance-ribbons-discounts-interior-d-illust-illustration-78194063.jpg"
            alt="Electronics"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Electronics
            </h2>
            <p className="mt-2 text-gray-600">Latest gadgets and electronics</p>
          </div>
          <div className="p-6 border-t border-gray-200">
            <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              View More
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Fashion"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Fashion</h2>
            <p className="mt-2 text-gray-600">Trendy clothes and accessories</p>
          </div>
          <div className="p-6 border-t border-gray-200">
            <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              View More
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://th.bing.com/th/id/OIP.3TYREiL5AoAQmS-X9GsipAAAAA?rs=1&pid=ImgDetMain"
            alt="Home & Kitchen"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Home & Kitchen
            </h2>
            <p className="mt-2 text-gray-600">
              Essential home and kitchen items
            </p>
          </div>
          <div className="p-6 border-t border-gray-200">
            <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              View More
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Books"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Books</h2>
            <p className="mt-2 text-gray-600">
              A wide range of books and literature
            </p>
          </div>
          <div className="p-6 border-t border-gray-200">
            <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
