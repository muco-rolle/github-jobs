import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

export const JobsLoader = (
    props: JSX.IntrinsicAttributes &
        IContentLoaderProps & { children?: React.ReactNode }
) => (
    <ContentLoader
        width="100%"
        backgroundColor="#edf2f7"
        foregroundColor="#e2e8f0"
        {...props}
    >
        <rect x="12" rx="2" ry="2" width="100%" height="100%" />
    </ContentLoader>
);
