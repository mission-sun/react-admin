import {
	BrowserRouter,
	HashRouter,
  Switch,
	Route,
	Redirect,
  Link,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from './Login';
import { Divider } from "antd";
import Home from './Home';
import Auth from './Auth';
import ToDoList from './TodoList';


export default function App() {
	const isLogin = false;
	// if (!isLogin) {
	// 	return (
	// 		<BrowserRouter>
	// 			<Redirect exact to="/login" />
	// 		</BrowserRouter>
	// 	)
	// }
  return (
    <BrowserRouter>
      <div>
        <Switch>


					<Route path="/login" component={Login}></Route>
					<Route path="/" component={Home}></Route>


					{/* <Route exact path="/login">
            <Login />
          </Route>
					<Auth exact path="/login" loginComs="true" component= { Login } />
					<Route path="/home">
            <Home />
          </Route> */}
					{/* <Auth path="/home" component= { Home } /> */}
					{/* <Auth exact path="/todolist" component= { ToDoList } /> */}
					{/* <Auth notFound="true" />  */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// function InnerHome() {
// 	return (<div> 我是innerhome</div>)
// }

// function Home(props: any) {
// 	console.log('props', props);
//   return <h2>Home</h2>;
// }

