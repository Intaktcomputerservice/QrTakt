import React, {useState} from "react";
import { Form, Input, Checkbox, Button, AutoComplete } from 'antd';
import languages from "../languages";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Register = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };


    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.de', '.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
    return (
        <div style={{width: "70%"}}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
            >
                <Form.Item
                    name="firmName"
                    label={languages.LABEL_FIRM}
                    rules={[
                        {
                            required: true,
                            message: languages.ERROR_MSG_FIRM,
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="firstname"
                    label={languages.LABEL_FIRSTNAME}
                    rules={[
                        {
                            required: true,
                            message: languages.ERROR_MSG_LASTNAME
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="lastname"
                    label={languages.LABEL_LASTNAME}
                    rules={[
                        {
                            required: true,
                            message: languages.ERROR_MSG_LASTNAME
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label={languages.LABEL_EMAIL}
                    rules={[
                        {
                            type: 'email',
                            message: languages.ERROR_MSG_EMAIL_VALID,
                        },
                        {
                            required: true,
                            message: languages.ERROR_MSG_EMAIL,
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="password"
                    label={languages.LABEL_PASSWORD}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: languages.ERROR_MSG_PASSWORD
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label={languages.LABEL_PASSWORD_VALID}
                    hasFeedback
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: languages.ERROR_MSG_PASSWORD_VALID,
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error(languages.ERROR_MSG_PASSWORD_NOT_VALID));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label={languages.LABEL_PHONE_NUMBER}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="website"
                    label={languages.LABEL_WEBSITE}
                >
                    <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="www.yourside.com">
                        <Input />
                    </AutoComplete>
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        {languages.ARGEEMENT}
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;