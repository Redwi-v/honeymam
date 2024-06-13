'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import React, { FC, PropsWithChildren } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import { QueryClient, QueryClientProvider } from 'react-query';

const Providers:FC<PropsWithChildren> = ({ children }) => {

  const [ queryClient ] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  }))

  return (

    <>

      <QueryClientProvider client = { queryClient }>

        {children}

      </QueryClientProvider>
      <ReactNotifications />
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