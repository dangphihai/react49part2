import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';

const HomeLayout = (props) => {
    return <Fragment>
        <Header />
        {props.children}
    </Fragment>
}

export const HomeTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={(propsRoute) => {
        return <HomeLayout>
            <Component {...propsRoute} />
        </HomeLayout>
    }} />
}