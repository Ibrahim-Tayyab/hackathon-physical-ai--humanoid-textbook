import React from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props: any): JSX.Element {
    const LayoutAny = Layout as any;
    return (
        <>
            <LayoutAny {...props} />
        </>
    );
}
