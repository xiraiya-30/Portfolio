import React from 'react';
import { PacmanLoader } from 'react-spinners';

function Loading() {
  return (
    <div className="flex h-screen bg-deep-orange-600
     justify-center items-center">
      <div className=' p-4 rounded delay-1000 '>
        <PacmanLoader color='#000000'  />
      </div>
    </div>
  );
}

const openLink = (source) => {
  window.open(source, '_blank');
}

export { Loading,openLink };
