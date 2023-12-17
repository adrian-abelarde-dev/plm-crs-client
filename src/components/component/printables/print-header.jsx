import React from 'react';

// ? can be used as a header for printables, etc.
// TODO: Modify the code to enable logos for both sides.
// TODO: Logo should be hidden if logo prop is empty --> leftLogo && rightLogo
function PrintHeader({ college }) {
  return (
    <div className='mt-4 flex flex-col place-items-center gap-1'>
      <h1 className='text-base font-bold'>PAMANTASAN NG LUNGSOD NG MAYNILA</h1>
      <h2 className='text-xs italic'>(University of the City of Manila)</h2>
      <h3 className='text-xs'>Intramuros, Manila</h3>
      <h3 className='pt-4 text-base font-bold'>{college}</h3>
    </div>
  );
}

export default PrintHeader;
