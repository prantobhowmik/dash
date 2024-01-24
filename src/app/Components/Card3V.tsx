import React from 'react';

const Card3V: React.FC<{ title: string; onClick: () => void;description1:string; buttonText1:string; description: string; buttonText:string }> = ({ title, description, description1, buttonText, buttonText1, onClick }) => {
  return (
    <div className=" max-w-screen-lg rounded-lg overflow-hidden border-[1px] border-slate-400 bg-slate-200">
      <div className="p-10 max-w-sm">
        <div className="flex gap-1 font-bold text-[17.5px] mb-2 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
{title}</div>
        <p className="text-gray-700 text-sm">{description}<a className='text-blue-600 underline' href='#'>Link</a>{description1}</p>
      </div>
      <div className="flex px-6 py-6">
        <button
          className="bg-white hover:bg-gray-50 text-black font-bold w-32 h-8 rounded-lg"
          onClick={onClick}
        >
          {buttonText}
        </button>
        <button
          className="ml-2 text-center bg-gray-800 hover:bg-gray-600 text-white text-[14px] p-1 w-42 h-8 rounded-lg"
          onClick={onClick}
        >
          {buttonText1}
        </button>
      </div>
    </div>
  );
};

export default Card3V;
