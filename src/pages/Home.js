import React from 'react'
import { useEffect } from 'react';
import {connect} from 'react-redux';
import { getCategories } from '../actions/categories';

const mapDispatchToProps = {
 getCategories
}

const Home = ({getCategories}) => {

    useEffect(() => {
        getCategories()
    }, [getCategories]) 

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Home);
