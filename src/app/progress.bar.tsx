'use client'


import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { FC, PropsWithChildren } from 'react';

const Providers:FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="7px"
        color="#117031"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;