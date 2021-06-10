import React from 'react';
import { Row, Col } from 'antd';

function AuthenticationView(){
    return (
        <>
            <Row>
                <Col span={12}><div style={{backgroundColor: "red"}}>Login</div></Col>
                <Col span={12}><div style={{backgroundColor: "green"}}>Register</div></Col>
            </Row>
        </>
    );
}

export default AuthenticationView;