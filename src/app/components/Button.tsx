
import React from 'react';

function Button(props: { textName: string }) {
  return (
    <button
      className="bg-[#131b54] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 hover:bg-[#ae9292] hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 sm:ml-20 ml-4"
    >
      {props.textName}
    </button>
  );
}

export default Button;
