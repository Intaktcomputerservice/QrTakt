import React from 'react';
import { Row, Col } from 'antd';
import Login from '../components/Login';
import Register from '../components/Register';

const AuthenticationView = () =>{
    return (
        <>
            <Row>
                <Col span={12}><div style={{width: "70%"}}><Login /></div></Col>
                <Col span={12}><div style={{backgroundColor: "green"}}><Register /></div></Col>
            </Row>
        </>
    );
}

export default AuthenticationView;