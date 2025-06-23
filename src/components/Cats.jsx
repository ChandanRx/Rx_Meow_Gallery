import React, { useEffect, useState } from 'react';

const Cats = () => {
  const [cats, setCats] = useState([]);

  const catsApi = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    catsApi();
  }, []);

  const handleClick = () => {
    catsApi();
  };

  return (
    <div className="flex flex-col items-center gap-6 px-4 pb-10">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cats.map((e, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={e.url}
              alt="Cute Cat"
              className="w-[250px] h-[250px] object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleClick}
        className="mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-lg hover:from-orange-500 hover:to-yellow-500 transition duration-300"
      >
        Generate New
      </button>
    </div>
  );
};

export default Cats;
