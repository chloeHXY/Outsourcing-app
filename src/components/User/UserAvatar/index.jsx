import { Avatar, Button, Divider, Popover } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss'

const UserAvatar = ({ userInfo, isLogin, history }) => {
    const { avatarPic, userName } = userInfo;

    const handleRouteTo = (e) => {
        e.stopPropagation()
        console.log(e.target.id)
        history.push({
            pathname: `/home/user/${e.target.id}`
        })
    }
    const handleExitLogin = () => {

    }

    const userModal = (
        <div className='user-modal'>
            <header>{userName}</header>
            <Divider />
            <main onClick={handleRouteTo}>
                <p id="userinfo">我的账户</p>
                <p id="myorder">我的订单</p>
                <p id="questions">常见问题</p>
                <p id="aboutus">关于我们</p>
            </main>
            <Divider />
            <footer onClick={handleExitLogin}>退出登录</footer>
        </div>
    )
    return (
        <div className='user-avatar'>
            {isLogin
                ? (
                    <Popover trigger="hover" content={userModal} placement="bottom">
                        <Avatar src={avatarPic || 'https://pic.imgdb.cn/item/623071295baa1a80ab69cad9.jpg'} className='avatar-pic' />
                    </Popover>
                )
                : <Button shape='round' >登录/注册</Button>
            }
        </div>
    );
}

export default withRouter(UserAvatar);
