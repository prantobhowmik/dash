import React from 'react';

const Card2V: React.FC<{ title: string; onClick: () => void; description: string; buttonText:string }>  = ({ title, description, buttonText, onClick }) => {
  return (
    <div className=" max-w-screen-lg rounded-lg overflow-hidden border-[1px] border-yellow-300 bg-yellow-100">
      <div className="p-10 max-w-sm">
        <div className="flex gap-1 font-bold text-[17.1px] mb-2 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                    <path stroke-linecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                                </svg>
{title}</div>
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

export default Card2V;
