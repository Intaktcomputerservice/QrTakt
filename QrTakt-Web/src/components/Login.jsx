import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import languages from '../languages';

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};
  
const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
  
    return (
        <div style={{width: "40%"}}>
            <Form
                {...layout}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label={languages.LABEL_USERNAME}
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: languages.ERROR_MSG_USERNAME,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={languages.LABEL_PASSWORD}
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: languages.ERROR_MSG_PASSWORD,
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" {...tailLayout}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
  };

export default Login;