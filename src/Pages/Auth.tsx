import {
	Route,
	Redirect,
} from "react-router-dom";
import { LoginStatus }  from './Login';

function Auth (params: any) {
	console.log('LoginStatus', LoginStatus);
	
	const { component: Component,notFound: value, ...rest }  = params;
	let isHaveAuth = true;
	if (value) {
		return (
			<Route>
				<Redirect exact to="/login" />
			</Route>)
	}
	if (isHaveAuth) {
		console.log('rest', rest);
		return (
			<Route {...rest}>
				<Component />
			</Route>
	)
	} else {
		return (
		<Route>
			<Redirect exact to="/login" />
		</Route>)
	}
}
export default Auth;