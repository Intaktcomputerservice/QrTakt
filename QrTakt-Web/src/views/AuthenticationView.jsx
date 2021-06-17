import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const AuthenticationView = () => (
    <div>
        <Tabs defaultActiveKey="1" >
            <TabPane tab="Login" key="1">
                <Login />
            </TabPane>
            <TabPane tab="Registration" key="2">
                <Register />
            </TabPane>
        </Tabs>
    </div>
);

export default AuthenticationView;