import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Logo from './components/Logo/Logo';

const config: DocsThemeConfig = {
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== '/') {
            return {
                titleTemplate: '%s - SoBold Docs',
            };
        }
    },
    logo: Logo,
    project: {
        link: 'https://github.com/SoBold/sobold-docs',
    },
    docsRepositoryBase: 'https://github.com/SoBold/sobold-docs',
    footer: {
        text: 'SoBold Docs',
    },
};

export default config;
