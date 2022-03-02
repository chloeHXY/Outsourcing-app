import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NavList from 'components/Layouts/NavList';
import Shoppingpage from 'pages/MainPages/ShoppingPage';
import Userinfopage from 'pages/MainPages/UserInfoPage';
import Footer from 'components/Layouts/Footer'
import './index.scss'
import GoodsPage from 'pages/MainPages/GoodsPage';


const Homepage = (props) => {
    return (
        <div id='main'>
            <NavList />
            <div className='router-inner'>
                <Route path="/home/shopping" component={Shoppingpage}></Route>
                <Route path="/home/user" component={Userinfopage}></Route>
                <Route path="/home/goods" component={GoodsPage}></Route>
            </div>
            <Footer />
        </div>
    );
}

export default withRouter(Homepage);
