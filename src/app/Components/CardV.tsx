import React from 'react';

const CardV: React.FC<{ title: string; onClick: () => void; description: string; buttonText:string }> = ({ title, description, buttonText, onClick }) => {
  return (
    <div className=" max-w-screen-lg rounded-lg overflow-hidden bg-white border border-yellow-200">
      <div className="p-10 max-w-sm">
        <div className="font-bold text-md mb-2 ">{title}</div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="px-6 py-6">
        <button
          className="bg-gray-800 hover:bg-gray-600 text-white font-bold px-10 py-2 rounded-lg"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardV;
