'use client';

import { MantineProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <SessionProvider>
            <MantineProvider>{children}</MantineProvider>
        </SessionProvider>
    );
};

export default Providers;
