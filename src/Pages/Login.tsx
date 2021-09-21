import React from 'react';
import './Login.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// src/history.js
import { createBrowserHistory } from 'history';
// export default createHistory();
class Login extends React.Component {	
	constructor(props: any) {
		super(props);
		this.state = {
			isHaveAuth: false
		}
	}
	changeStaus = () => {
		console.log('LoginStatus', LoginStatus);
		LoginStatus.isHaveAuth = true;
		console.log('LoginStatus', LoginStatus);
	}
  onFinish = (values: any) => {
		console.log('Finish:', values);
		this.changeStaus();
		createBrowserHistory({
			forceRefresh: true 
		}).push('/home')
  };

	render() {
		return (
			<div className="App-header">
			<Form  className="form-wrap" name="horizontal_login"  onFinish={ this.onFinish }>
				<Form.Item>
					<h4 className="login-header">库存系统登录</h4>
				</Form.Item>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item shouldUpdate>
					{() => (
						<Button
							className="form-wrap"
							type="primary"
							htmlType="submit"
						>
							Log in
						</Button>
					)}
				</Form.Item>
			</Form>
			</div>
		);
	}
}

// const ShowTheLocationWithRouter = withRouter(Login);

export default Login;

export const LoginStatus = {
	isHaveAuth: false
}