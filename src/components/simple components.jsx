import React from 'react';
import { PacmanLoader } from 'react-spinners';

function Loading() {
  return (
    <div className="flex h-screen justify-center items-center bg-deep-orange-500">
      <div className=' p-4 rounded'>
        <PacmanLoader color='#000000' />
      </div>
    </div>
  );
}

export { Loading };
