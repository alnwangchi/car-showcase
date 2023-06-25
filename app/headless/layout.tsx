import React from 'react';

const HeadlessUILayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-emerald-900'>{children}</div>
  );
};

export default HeadlessUILayout;
