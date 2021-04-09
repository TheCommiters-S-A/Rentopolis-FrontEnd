import React from 'react';
import { useRequireAuth } from '../hooks/use-require-auth';
import { NineCellLoading } from 'react-loadingg';

export const PrivatePage = ({ component: Component, ...rest }) => {

    const auth = useRequireAuth();

    if (!auth) {

        return <NineCellLoading />;
    }

    return <Component auth={auth} {...rest} />;

}
