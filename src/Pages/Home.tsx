// import Menu from '../components/menu';
// import Right from '../components/Right';
import React from 'react';
import './Home.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
	UploadOutlined,
	HomeOutlined
} from '@ant-design/icons';
import { Link,  Route, Switch, Redirect } from 'react-router-dom';
// import ToDoList from './TodoList';
import ToDoList from './todo';



import { Apis, Apis1 }  from '../index1.js';
import StoreHouse from './StoreHouse';


console.log('-----------add', Apis, Apis1);

const { Header, Sider, Content } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
						库存系统
					</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
							<Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
             	<Link to="/todo">todolist</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
							<Link to="/login">login</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, textAlign: 'left' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
							<Switch>
								<Redirect exact={true} from="/" to="/home"></Redirect>
								<Route path="/home" component={StoreHouse}></Route>
								<Route path="/todo" component={ToDoList}></Route>
							</Switch>

							{/* <Switch>
								<Route exact path="home/:home" />
									<StoreHouse />
								<Route />
								<Route exact path="/home/:todolist" />
									<ToDoList />
								<Route />
							</Switch> */}

          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default Home;

