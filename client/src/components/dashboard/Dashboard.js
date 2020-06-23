import React from 'react'
import { Route } from "react-router-dom";

// Components
import Sidebar from './Sidebar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

// Style
import styled from 'styled-components'
import { background_variant } from '../theme'

const StyledDashboard = styled.div`
    display: flex;

    .content {
        width: 80%;
        background-color: ${background_variant};
    }
`


const Dashboard = props => {

    return(
        <StyledDashboard>
            <Sidebar></Sidebar>
            <div className="content">
                <Route path="/" component={Home}/>
                <Route path="/favorites" component={Favorites}/>
            </div>
        </StyledDashboard>
    )
}

export default Dashboard