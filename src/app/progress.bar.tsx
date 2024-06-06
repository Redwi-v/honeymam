'use client'


import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import React, { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const Providers:FC<PropsWithChildren> = ({ children }) => {

  const [ queryClient ] = React.useState(() => new QueryClient())

  return (

    <>

      <QueryClientProvider client = { queryClient }>

        {children}

      </QueryClientProvider>

      <ProgressBar
        height="3px"
        color="#117031"
        options={{ showSpinner: false }}
        shallowRouting
      />

    </>

  );

};

export default Providers;